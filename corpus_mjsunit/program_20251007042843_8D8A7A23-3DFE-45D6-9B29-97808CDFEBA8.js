function Module(a1, a2, a3) {
    'use asm';
    function f0(a5) {
        return (((a5 = a5 | 0) | 0) % 2) | 0;
    }
    function f1(a15) {
        return (((a15 = a15 | 0) | 0) % 3) | 0;
    }
    function f2(a25) {
        return (((a25 = a25 | 0) | 0) % 9) | 0;
    }
    function f3(a35) {
        return (((a35 = a35 | 0) | 0) % 1024) | 0;
    }
    function f4(a45) {
        return (((a45 = a45 | 0) | 0) % 3333339) | 0;
    }
    const v54 = {
        f0: f0,
        f1: f1,
        f2: f2,
        f3: f3,
        f4: f4,
    };
    return v54;
}
const v56 = {};
const v59 = new ArrayBuffer(1024);
var m = Module(this, v56, v59);
for (let i64 = -2147483648; i64 < 2147483648; i64 += 3999773) {
    (i64 % 2) | 0;
    m.f0(i64);
    (i64 % 3) | 0;
    m.f1(i64);
    (i64 % 9) | 0;
    m.f2(i64);
    (i64 % 1024) | 0;
    m.f3(i64);
    (i64 % 3333339) | 0;
    m.f4(i64);
}
