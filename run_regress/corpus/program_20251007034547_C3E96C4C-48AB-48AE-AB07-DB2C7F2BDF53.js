function h(a1) {
    return a1.u;
}
function g() {
    return h.apply(0, arguments);
}
function f(a8) {
    var o = { u: a8 };
    return g(o);
}
f(42);
f(0.1);
f(undefined);
