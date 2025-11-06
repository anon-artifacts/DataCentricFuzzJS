[-1000000.0,-2.2250738585072014e-308,-4.0];
const v1 = [1000000000000.0,-634.3541213720076,218320.97860031645,0.0,-1000000.0];
const v2 = [-100060.28753641807,1.7976931348623157e+308];
class C3 {
    static #b = v1;
    #valueOf(a5, a6) {
    }
}
new C3();
class C8 {
    1073741823 = C3;
    constructor(a10, a11, a12) {
        const v14 = this[Symbol];
        delete v2[this];
        try { C3.n(this, a11, a12, v14, v2); } catch (e) {}
        // WasmModule Code:
        // BeginWasmModule
        //     v17 <- WasmDefineTag [Fuzzilli.Parameter.plain(.wasmf64)]
        //     v18 <- WasmDefineTag [Fuzzilli.Parameter.plain(.wasmi32), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmi64), Fuzzilli.Parameter.plain(.wasmf32), Fuzzilli.Parameter.plain(.wasmf32)]
        //     v19 <- WasmDefineMemory [4,], memory64
        // v20 <- EndWasmModule
        // 
        const v20 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
            0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00, 0x01, 0x0D,
            0x02, 0x60, 0x01, 0x7C, 0x00, 0x60, 0x05, 0x7F, 0x7C, 0x7E,
            0x7D, 0x7D, 0x00, 0x03, 0x01, 0x00, 0x04, 0x01, 0x00, 0x05,
            0x03, 0x01, 0x04, 0x04, 0x0D, 0x05, 0x02, 0x00, 0x00, 0x00,
            0x01, 0x06, 0x01, 0x00, 0x07, 0x01, 0x00, 0x09, 0x01, 0x00,
            0x0A, 0x01, 0x00,
        ])));
        v20.exports;
    }
    9;
}
new C8();
new C8(C8, C3);
new C8();
new Uint16Array();
const v30 = Array();
var gTc = v30;
let v32 = false;
function f33() {
    v30[gTc++] = this;
}
for (let v36 = 0; v36 < 100; v36++) {
    const v38 = new f33();
    var testcase = v38;
}
v32 = true;
Array.prototype;
for (let v43 = 0; v43 < 250; v43++) {
    var testcase = f33();
}
