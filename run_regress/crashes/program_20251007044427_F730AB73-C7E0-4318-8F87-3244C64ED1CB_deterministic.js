var typedArray = [Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];
var lengths = [0,5,20];
const v16 = new Array();
var typedObjectInstances = v16;
function printObj(a19) {
    print(a19.toString());
    for (const v23 in a19) {
        print((v23 + " == ") + a19[v23]);
    }
}
function InitTypedArray(a30) {
    for (let i32 = 0; i32 < a30.length; i32++) {
        a30[i32] = i32;
    }
}
function verifyNoThrow(a39, a40) {
    var hasThrown = false;
    try {
        a39(a40);
    } catch(e44) {
        print("FAILED: get exception " + e44.description);
        hasThrown = true;
    }
}
function verifyThrow(a52, a53) {
    var hasThrown = false;
    try {
        a52(a53);
    } catch(e57) {
        print("SUCCEEDED: get expected exception " + e57.description);
        hasThrown = true;
    }
    if (!hasThrown) {
        print("FAILED: didn't get exception");
    }
}
function verifyOneFunction(a69, a70, a71, a72, a73, a74) {
    var hasException = false;
    var result;
    try {
        printObj(result = a69(a70, a71, a72));
        for (let i82 = 0; i82 < result.length; i82++) {
            if (result[i82] != a70[a71][i82 + a73]) {
                print((((((("failed to offset: offset is " + a73) + "index is ") + i82) + "source is") + a70[a71][i82 + a73]) + "dest is") + result[i82]);
            }
        }
    } catch(e110) {
        hasException = true;
        if (!a74) {
            print("ERROR! throw unexpected exception " + e110.description);
        }
    }
    if (!hasException && a74) {
        print("ERROR! expected exception was not thrown");
    }
}
function verifysubarray(a124, a125, a126, a127, a128) {
    var hasException = false;
    var result;
    try {
        const v133 = a124[a125];
        printObj(result = Object.getPrototypeOf(a124[a126]).subarray.call(v133, a127));
        for (let i141 = 0; i141 < result.length; i141++) {
            if (result[i141] != a124[a125][i141 + a127]) {
                print((((((("failed to offset: offset is " + a127) + "index is ") + i141) + "source is") + a124[a125][i141 + a127]) + "dest is") + result[i141]);
            }
        }
    } catch(e169) {
        hasException = true;
        if (!a128) {
            print("ERROR! throw unexpected exception " + e169.description);
        } else {
            print("SUCCEEDED in getting exception " + e169.description);
        }
    }
    if (!hasException && a128) {
        print("ERROR! expected exception was not thrown");
    }
}
function verifySet(a188, a189, a190, a191) {
    var hasException = false;
    var result;
    var source = [1,3,5,7,9,11,13,15];
    print((("verify set.call using prototypeOf " + a188[a190]) + " instance ") + a188[a189]);
    try {
        const v215 = a188[a190];
        Object.getPrototypeOf(a188[a189]).set.call(v215, source);
        for (let i222 = 0; i222 < source.length; i222++) {
            if (a188[a190][i222] != source[i222]) {
                print(((((("failed to set: offset =0 " + "index is ") + i222) + "source is") + source[i222]) + "dest is") + a188[a190][i222]);
            }
        }
    } catch(e246) {
        hasException = true;
        if (!a191) {
            print("ERROR! throw unexpected exception " + e246.description);
        } else {
            print("SUCCEEDED in getting exception " + e246.description);
        }
    }
    if (!hasException && a191) {
        print("ERROR! expected exception was not thrown");
    }
    print(("verify set using " + a188[a190]) + " using array");
    try {
        a188[a190].set(source, 1);
        for (let i271 = 0; i271 < source.length; i271++) {
            if (source[i271] != a188[a190][i271 + 1]) {
                print((((((("ERROR! failed to set: offset is " + 1) + "index is ") + i271) + "source is") + source[i271]) + "dest is") + a188[a190][i271 + 1]);
            }
        }
    } catch(e301) {
        print("ERROR! throw unexpected exception " + e301.description);
    }
    print((("verify set using " + a188[a190]) + " instance ") + a188[a189]);
    try {
        const v314 = a188[a189];
        a188[a190].set(v314);
        for (let i318 = 0; i318 < a188[a189].length; i318++) {
            if (a188[a189][i318] != a188[a190][i318]) {
                print((((("failed to set: index is " + i318) + "source is") + a188[a189][i318]) + "dest is") + a188[a190][i318]);
            }
        }
    } catch(e343) {
        print("ERROR! throw unexpected exception " + e343.description);
    }
    print("verify set to different type");
    const v350 = a188[a190];
    const v351 = a188[a189];
    Object.getPrototypeOf(a188[a190]).set.call(v350, v351);
    for (let i358 = 0; i358 < a188[a190].length; i358++) {
        if (a188[a190][i358] != a188[a189][i358]) {
            print((((((("failed to offset: offset is " + offset) + "index is ") + i358) + "source is") + a188[a189][i358]) + "dest is") + a189);
        }
    }
    printObj(a188[a190]);
}
function verifyOneObject(a388, a389, a390, a391) {
    print((("verify subarray.call using prototypeOf " + a388[a390]) + " instance ") + a388[a389]);
    verifysubarray(a388, a389, a390, 1, a391);
    verifySet(a388, a389, a390, a391);
}
for (let i405 = 0; i405 < typedArray.length; i405++) {
    print(typedArray[i405]);
}
for (let i415 = 0; i415 < typedArray.length; i415++) {
    const t146 = typedArray[i415];
    const v423 = new t146(10);
    typedObjectInstances[i415] = v423;
    InitTypedArray(typedObjectInstances[i415]);
}
for (let i427 = 0; i427 < typedArray.length; i427++) {
    for (let i434 = 0; i434 < typedArray.length; i434++) {
        if (i427 != i434) {
            verifyOneObject(typedObjectInstances, i427, i434, true);
        } else {
            verifyOneObject(typedObjectInstances, i427, i434, false);
        }
    }
}
print("verify Object.defineProperty");
for (let i449 = 0; i449 < typedArray.length; i449++) {
    function f455(a456) {
        Object.defineProperty(a456, "1", { value: 1 });
    }
    verifyNoThrow(f455, typedObjectInstances[i449]);
    function f464(a465) {
        Object.defineProperty(a465, "1", { value: 1, writable: false });
    }
    verifyThrow(f464, typedObjectInstances[i449]);
    function f474(a475) {
        Object.defineProperty(a475, "1", { value: 1, configurable: true });
    }
    verifyThrow(f474, typedObjectInstances[i449]);
    function f484(a485) {
        function f487() {
            throw "error";
        }
        Object.defineProperty(a485, "1", { get: f487 });
    }
    verifyThrow(f484, typedObjectInstances[i449]);
    function f494(a495) {
        Object.defineProperty(a495, "hello", { value: 1 });
    }
    verifyNoThrow(f494, typedObjectInstances[i449]);
    function f503(a504) {
        a504.foo = "hello";
    }
    verifyNoThrow(f503, typedObjectInstances[i449]);
}
print("Verify call to built-in property");
function f510() {
    print("what??");
}
const t194 = Object.prototype;
t194.byteOffset = f510;
function callByteOffset(a516) {
    a516.byteOffset();
}
for (i = 0; i < typedArray.length; i++) {
    verifyThrow(callByteOffset, typedObjectInstances[i]);
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f7e7cde7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5585fd194a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5585fd1932a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5585fd187546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5585fd186d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5585feca013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5585ff06b7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5585febfd3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5585febab150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5585feba7fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5585fe8fe5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5585fe8f57e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5585fd373cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5585fe8f8588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5585fd19814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5585fd1a3925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5585fd190650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f7e8a1a6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7e8a238850]
// Received signal 6
// STDOUT:
// function Int8Array() { [native code] }
// function Uint8Array() { [native code] }
// function Int16Array() { [native code] }
// function Uint16Array() { [native code] }
// function Int32Array() { [native code] }
// function Uint32Array() { [native code] }
// function Float32Array() { [native code] }
// function Float64Array() { [native code] }
// verify subarray.call using prototypeOf 0,1,2,3,4,5,6,7,8,9 instance 0,1,2,3,4,5,6,7,8,9
// 1,2,3,4,5,6,7,8,9
// 0 == 1
// 1 == 2
// 2 == 3
// 3 == 4
// 4 == 5
// 5 == 6
// 6 == 7
// 7 == 8
// 8 == 9
// verify set.call using prototypeOf 0,1,2,3,4,5,6,7,8,9 instance 0,1,2,3,4,5,6,7,8,9
// verify set using 1,3,5,7,9,11,13,15,8,9 using array
// verify set using 1,1,3,5,7,9,11,13,15,9 instance 1,1,3,5,7,9,11,13,15,9
// verify set to different type
// 1,1,3,5,7,9,11,13,15,9
// 0 == 1
// 1 == 1
// 2 == 3
// 3 == 5
// 4 == 7
// 5 == 9
// 6 == 11
// 7 == 13
// 8 == 15
// 9 == 9
// verify subarray.call using prototypeOf 0,1,2,3,4,5,6,7,8,9 instance 1,1,3,5,7,9,11,13,15,9
// 1,3,5,7,9,11,13,15,9
// 0 == 1
// 1 == 3
// 2 == 5
// 3 == 7
// 4 == 9
// 5 == 11
// 6 == 13
// 7 == 15
// 8 == 9
// ERROR! expected exception was not thrown
// verify set.call using prototypeOf 0,1,2,3,4,5,6,7,8,9 instance 1,1,3,5,7,9,11,13,15,9
// ERROR! expected exception was not thrown
// verify set using 1,3,5,7,9,11,13,15,8,9 using array
// verify set using 1,1,3,5,7,9,11,13,15,9 instance 1,1,3,5,7,9,11,13,15,9
// verify set to different type
// 1,1,3,5,7,9,11,13,15,9
// 0 == 1
// 1 == 1
// 2 == 3
// 3 == 5
// 4 == 7
// 5 == 9
// 6 == 11
// 7 == 13
// 8 == 15
// 9 == 9
// verify subarray.call using prototypeOf 0,1,2,3,4,5,6,7,8,9 instance 1,1,3,5,7,9,11,13,15,9
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 144ms
