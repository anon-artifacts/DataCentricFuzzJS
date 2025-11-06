function bar(a1, a2) {
    if (a2 == 50) {
        a1.length = 0;
    }
}
function foo(a7, a8, a9) {
    for (let i11 = 0; i11 < a9; i11++) {
        bar(a7, i11);
    }
}
var a = foo([1,2,3,4], 3, 100);
