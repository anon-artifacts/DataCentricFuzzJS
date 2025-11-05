var p = { f: true };
function foo(a4, a5, a6) {
    var c;
    if (p.f) {
        c = a5;
    }
    return a6[Math.max(a4, c)];
}
var result = 0;
var array = [42,43,44,45,46];
for (let i23 = 0; i23 < 400000; ++i23) {
    result += foo((i23 % 3) * 2, (i23 % 2) + 1, array);
}
if (result != 17799999) {
    throw "Bad result: " + result;
}
