function foo(a1, a2) {
    var a = 0;
    for (let i6 = 0; i6 < a2; i6++) {
        a += a1[3];
    }
    return a;
}
var a = foo([1,2,3,4], 100);
var b = foo([1,2], 100);
