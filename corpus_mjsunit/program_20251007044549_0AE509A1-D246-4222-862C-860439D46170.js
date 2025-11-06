function foo(a1, a2, a3) {
    var a = 0;
    for (let i7 = 0; i7 < a3; i7++) {
        a += a1[a2];
    }
    return a;
}
var a = foo([1,2,3,4], 3, 100);
var b = foo([1,2,3,4], 5, 100);
