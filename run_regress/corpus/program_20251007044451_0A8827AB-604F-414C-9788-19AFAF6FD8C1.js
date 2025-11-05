function Module(a1, a2, a3) {
    'use asm';
    function f1(a5) {
        return (((a5 = a5 | 0) | 0) % 3) | 0;
    }
    function f2(a15) {
        return (((a15 = a15 | 0) | 0) % 9) | 0;
    }
    function f3(a25) {
        return (((a25 = a25 | 0) | 0) % 1024) | 0;
    }
    function f4(a35) {
        return (((a35 = a35 | 0) | 0) % 3133335) | 0;
    }
    return { f1: f1, f2: f2, f3: f3, f4: f4 };
}
const v46 = {};
const v49 = new ArrayBuffer(1024);
var m = Module(this, v46, v49);
for (let i54 = -2147483648; i54 < 2147483648; i54 += 3999773) {
    (i54 % 3) | 0;
    m.f1(i54);
    (i54 % 9) | 0;
    m.f2(i54);
    (i54 % 1024) | 0;
    m.f3(i54);
    (i54 % 3133335) | 0;
    m.f4(i54);
}
