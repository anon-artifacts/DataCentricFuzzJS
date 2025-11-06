function foo(a1, a2) {
    var c = (a1 + a2) / 2;
    var d = a1 - a2;
    for (let i10 = 0; i10 < 50000; ++i10) {
        c *= d;
        c += d;
        c /= d;
    }
    return c - d;
}
var result = 0;
for (let i20 = 0; i20 < 50; ++i20) {
    result += foo(5, 6);
}
if (result != 2500325) {
    throw "Bad result: " + result;
}
