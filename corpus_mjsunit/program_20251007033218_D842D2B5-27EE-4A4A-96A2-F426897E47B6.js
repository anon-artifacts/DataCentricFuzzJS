function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < 5000; ++i5) {
        result += a1.f;
    }
    return result;
}
var o = { f: 42 };
var result = 0;
for (let i18 = 0; i18 < 1000; ++i18) {
    result += foo(o);
}
if (result != 210000000) {
    throw "Error: bad result: " + result;
}
