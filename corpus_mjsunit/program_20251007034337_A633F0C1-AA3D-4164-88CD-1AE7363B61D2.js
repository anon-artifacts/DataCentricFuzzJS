function foo() {
    var p = {};
    var o = {};
    o.__proto__ = p;
    var result;
    for (let i8 = 0; i8 < 100; ++i8) {
        result = o.f;
        if (i8 == 50) {
            p.f = 42;
        }
    }
    return result;
}
var result = foo();
if (result != 42) {
    throw "Error: bad result: " + result;
}
