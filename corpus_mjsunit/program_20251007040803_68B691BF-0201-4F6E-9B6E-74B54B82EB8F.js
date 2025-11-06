function f0() {
}
const v1 = /ffoo(?=bar)baz?/mgdsu;
const v2 = /(?:ab)/gdi;
const v3 = /a/y;
try { v1.test(); } catch (e) {}
for (let v6 = 0; v6 < 32; v6++) {
    v2[v6] = v6;
}
let v11 = 0;
do {
    new Proxy(v3, { has: Array, isExtensible: f0, ownKeys: f0, setPrototypeOf: Array });
    v11++;
} while (v11 < 8)
new Array(2420);
new Int16Array(512);
new Uint32Array(148);
new Uint8ClampedArray(35);
function InlinedThrowAtEndOfTry() {
    function g() {
        throw "boom";
    }
    function f() {
        try {
        } catch(e33) {
        }
    }
    f();
    f();
    f();
}
InlinedThrowAtEndOfTry();
function InlinedThrowInFrontOfTry() {
    function g() {
        // WasmModule Code:
        // BeginWasmModule
        //     v42 <- WasmDefineMemory [9,24432], memory64
        //     v43 <- WasmDefineTag [Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmf32), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmf32), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmi32), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmi64)]
        // v44 <- EndWasmModule
        // 
        const v44 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
            0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00, 0x01, 0x0D,
            0x01, 0x60, 0x09, 0x7C, 0x7D, 0x7C, 0x7D, 0x7C, 0x7F, 0x7C,
            0x7C, 0x7E, 0x00, 0x03, 0x01, 0x00, 0x04, 0x01, 0x00, 0x05,
            0x06, 0x01, 0x05, 0x09, 0xF0, 0xBE, 0x01, 0x0D, 0x03, 0x01,
            0x00, 0x00, 0x06, 0x01, 0x00, 0x07, 0x01, 0x00, 0x09, 0x01,
            0x00, 0x0A, 0x01, 0x00,
        ])));
        v44.exports;
        throw "boom";
    }
    function f() {
        try { g(); } catch (e) {}
        try {
            Math.random();
        } catch(e50) {
        }
    }
    f();
    f();
    f();
}
InlinedThrowInFrontOfTry();
