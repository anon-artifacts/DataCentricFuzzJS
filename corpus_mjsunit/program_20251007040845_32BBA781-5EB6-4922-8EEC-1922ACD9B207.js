function bar(a1, a2) {
    if (a2 == 50) {
        const t2 = foo.arguments;
        t2[1] = 20;
    }
}
function foo(a9, a10, a11) {
    var a = 0;
    for (let i16 = 0; i16 < a11; i16++) {
        var q = a9[a10];
        bar(a9, i16);
        if (typeof q == "undefined") {
            a++;
        }
    }
    return a;
}
var a = foo([1,2,3,4], 3, 100);
