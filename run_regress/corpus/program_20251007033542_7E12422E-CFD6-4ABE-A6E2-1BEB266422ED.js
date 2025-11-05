function foo(a1, a2, a3) {
    var c = (a1 + a2) / 2;
    var d = a1 - a2;
    for (let i11 = 0; i11 < 100000; ++i11) {
        c *= d;
        c += d;
        c /= d;
        c += a3[d + 2];
    }
    return c - d;
}
var result = 0;
var array = [7,8];
for (let i28 = 0; i28 < 10; ++i28) {
    result += foo(5, 6, array);
}
if (result != 9000065) {
    print("Bad result: " + result);
    throw "Bad result: " + result;
}
