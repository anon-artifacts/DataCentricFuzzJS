const v0 = () => {
    let x = WebAssembly.Module;
};
v0();
function Module(a6, a7, a8) {
    'use asm';
    function f1(a10) {
        return (((a10 = a10 | 0) | 0) / 3) | 0;
    }
    function f2(a20) {
        return (((a20 = a20 | 0) | 0) / 13) | 0;
    }
    function f3(a30) {
        return (((a30 = a30 | 0) | 0) / 1024) | 0;
    }
    function f4(a40) {
        return (((a40 = a40 | 0) | 0) / 3733331) | 0;
    }
    return { f1: f1, f2: f2, f3: f3, f4: f4 };
}
const v51 = {};
const v54 = new ArrayBuffer(1024);
var m = Module(this, v51, v54);
for (let i59 = -2147483648; i59 < 2147483648; i59 += 3999777) {
    (i59 / 3) | 0;
    m.f1(i59);
    (i59 / 13) | 0;
    m.f2(i59);
    (i59 / 1024) | 0;
    m.f3(i59);
    (i59 / 3733331) | 0;
    m.f4(i59);
}
