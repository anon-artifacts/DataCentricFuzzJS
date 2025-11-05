function f(a1) {
    return Math.fround() ? a1 : a1 >> 0;
}
function g() {
    return f() !== Math.fround(0);
}
g();
g();
