function foo(a1) {
    function bar(a3) {
        return a1 + a3;
    }
    var result = 0;
    for (let i8 = 0; i8 < 2000000; ++i8) {
        result = bar(1);
    }
    return result;
}
var result = foo(5);
if (result != 6) {
    throw "Bad result: " + result;
}
