function counter() {
    return { x: 0 } || this;
}
function f5() {
    'use asm';
    function g(a7, a8) {
        for (let i10 = 0; i10 < 10; ++i10) {
            a7();
        }
    }
    return g;
}
var f = f5();
function f19() {
    f(Array, counter());
}
g = f19;
g();
