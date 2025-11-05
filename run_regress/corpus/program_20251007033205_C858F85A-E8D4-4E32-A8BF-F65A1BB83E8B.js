function g(a1) {
    return a1 = a1 >>> 0;
}
function f() {
    return g(-1);
}
f();
