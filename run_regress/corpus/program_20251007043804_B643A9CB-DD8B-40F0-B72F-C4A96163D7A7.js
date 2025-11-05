function f0() {
    'use asm';
    var a;
    function f() {
        var b = -1;
    }
    return f;
}
f = f0();
for (let i10 = 0; i10 < 1; ++i10) {
    f();
}
Math.fround(Math.fround());
for (let i22 = 0; i22 < 1; ++i22) {
    function f28() {
    }
    f28();
}
