function f0() {
    'use asm';
    function f(a2, a3) {
        return a2 << a3;
    }
    return f;
}
var f = f0();
var counter = 0;
function f9() {
    counter++;
    return "2";
}
var deopt = { toString: f9 };
function f14() {
    counter++;
    return "1";
}
var o = { toString: f14 };
counter = 0;
f(deopt, o);
counter = 0;
f(o, deopt);
counter = 0;
f(deopt, deopt);
