function foo(a1) {
    var result;
    for (let i5 = 0; i5 < 1000000; ++i5) {
        result = a1[0];
    }
    return result;
}
var result = foo("x");
if (result != "x") {
    throw "Bad result: " + result;
}
