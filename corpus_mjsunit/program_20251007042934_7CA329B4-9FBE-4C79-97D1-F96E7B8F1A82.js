function adder(a1, a2) {
    return a1 + a2;
}
function foo(a5) {
    for (let i7 = 0; i7 < 100; i7++) {
        var a = adder(a5, i7);
    }
    return a;
}
var q = foo(2147483632);
