function Module(a1) {
    'use asm';
    var fround = a1.Math.fround;
    function f(a6) {
        return fround(a6 = +a6);
    }
    return { f: f };
}
var f = Module({ Math: Math }).f;
function runNearStackLimit() {
    function g() {
        try {
            g();
        } catch(e18) {
            f();
        }
    }
    g();
}
function f21() {
    function g() {
    }
    runNearStackLimit(g);
}
f21();
