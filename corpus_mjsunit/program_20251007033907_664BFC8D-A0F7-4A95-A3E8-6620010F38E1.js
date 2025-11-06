function f(a1) {
    return a1;
}
function g(a3) {
    return false ? 0 : f(a3, 1);
}
function h(a10) {
    var z = g(a10, 1);
    return z + 1;
}
h(1);
h(1);
h("a");
