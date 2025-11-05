function Module(a1, a2, a3) {
    'use asm';
    function f1(a5) {
        return (((a5 = a5 | 0) | 0) * -3) | 0;
    }
    function f2(a16) {
        return (((a16 = a16 | 0) | 0) * 7) | 0;
    }
    function f3(a26) {
        return (((a26 = a26 | 0) | 0) * 1024) | 0;
    }
    function f4(a36) {
        return (((a36 = a36 | 0) | 0) * 333339) | 0;
    }
    return { f1: f1, f2: f2, f3: f3, f4: f4 };
}
const v47 = {};
const v50 = new ArrayBuffer(1024);
var m = Module(this, v47, v50);
for (let i55 = -2147483648; i55 < 2147483648; i55 += 3999771) {
    (i55 * -3) | 0;
    m.f1(i55);
    (i55 * 7) | 0;
    m.f2(i55);
    (i55 * 1024) | 0;
    m.f3(i55);
    (i55 * 333339) | 0;
    m.f4(i55);
}
