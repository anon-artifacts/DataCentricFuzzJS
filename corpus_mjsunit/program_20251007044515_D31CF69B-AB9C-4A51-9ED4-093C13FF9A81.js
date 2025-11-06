function h() {
    var res = g.arguments;
    return res;
}
function g(a5) {
    var res = h();
    return res;
}
function f1() {
    var o = { x: 42 };
    var res = g(o);
    return 1;
}
function f0(a16, a17) {
    'use strict';
    return f1(5);
}
function boom(a21) {
    if (a21) {
        const v24 = new Error("boom!");
        throw v24;
    }
}
f0();
f0();
boom(false);
boom(false);
try {
    f0(1, 2, 3);
    boom(true, 1, 2, 3);
} catch(e40) {
}
