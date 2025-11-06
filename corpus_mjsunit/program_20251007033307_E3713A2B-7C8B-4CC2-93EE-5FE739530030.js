function f(a1) {
    return a1.x;
}
function g(a4, a5) {
    return a4.x;
}
function h1(a8, a9) {
    return f(a8, a8) * g(a9);
}
function h2(a14, a15) {
    return f(a14, a14) * g(a15);
}
var o = { x: 2 };
h1(o, o);
h1(o, o);
h2(o, o);
h2(o, o);
h1(o, o);
h2(o, o);
var u = { y: 0, x: 1 };
h1(u, o);
h2(o, u);
