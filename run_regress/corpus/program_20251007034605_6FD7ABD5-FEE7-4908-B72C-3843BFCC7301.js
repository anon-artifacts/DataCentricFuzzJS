function f0() {
    'use asm';
    function foo(a2) {
        return a2 < a2;
    }
    return foo;
}
var f = f0();
function deopt(a7) {
    function f8() {
        return "2";
    }
    return { toString: f8 };
}
f(deopt(f));
