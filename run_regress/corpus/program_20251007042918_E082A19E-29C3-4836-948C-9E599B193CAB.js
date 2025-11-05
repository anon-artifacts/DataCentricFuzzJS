function choose(a1, a2, a3) {
    return a1 ? a2 : a3;
}
function foo(a6, a7, a8) {
    var a = 0;
    for (let i12 = 0; i12 < 100; i12++) {
        a += choose(a6, a7, a8);
    }
    return a;
}
var q = foo(true, 10, 0);
