function multiple(a1) {
    if (a1 > 10) {
        return 1;
    }
    return 0;
}
function foo(a7) {
    var a = 0;
    for (let i11 = 0; i11 < 100; i11++) {
        a += multiple(i11);
    }
    return a;
}
var q = foo([1,2,3,4,5]);
