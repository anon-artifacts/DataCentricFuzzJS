function f(a1) {
    var n = 1 + a1;
}
function g() {
    f();
    const v7 = f();
    var d = { x: v7 };
    return [d];
}
g();
g();
g();
