function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < 500000; ++i5) {
        result += a1.valueOf();
    }
    return result;
}
var result = foo(5);
if (result != 2500000) {
    throw "Bad result: " + result;
}
