function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Float64Array;
    const v5 = new t2(a3);
    var HEAPF64 = v5;
    const t5 = a1.Float32Array;
    const v8 = new t5(a3);
    var HEAPF32 = v8;
    var Math_fround = a1.Math.fround;
    function main_d_f() {
        HEAPF64[0] = Math_fround(+HEAPF64[0]);
    }
    function main_d_fq() {
        HEAPF64[1] = HEAPF32[4096];
    }
    function main_f_dq() {
        HEAPF32[4] = HEAPF64[4096];
    }
    return { main_d_f: main_d_f, main_d_fq: main_d_fq, main_f_dq: main_f_dq };
}
const v24 = new ArrayBuffer(4096);
let buffer = v24;
let module = Module(this, undefined, buffer);
const v31 = new Float64Array(buffer);
let view64 = v31;
const v34 = new Float32Array(buffer);
let view32 = v34;
view64[0] = 2.3;
view64[0];
module.main_d_f();
module.main_d_fq();
module.main_f_dq();
Math.fround(2.3);
view64[0];
isNaN(view64[1]);
isNaN(view32[4]);
