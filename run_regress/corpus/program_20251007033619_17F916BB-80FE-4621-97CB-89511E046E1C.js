function h(a1) {
    a1.u;
}
function g() {
    h.apply(0, arguments);
}
function f(a9) {
    g({ u: a9 });
}
f(42);
f(42);
f(42);
