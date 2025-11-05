var p = { f: true };
function foo(a4, a5, a6) {
    var c;
    if (p.f) {
        c = a5;
    }
    return a6[a4 / c];
}
var result = 0;
var array = [42,43,44,45,46];
for (let i22 = 0; i22 < 300000; ++i22) {
    result += foo((i22 % 3) * 2, (i22 % 2) + 1, array);
}
if (result != 13050000) {
    throw "Bad result: " + result;
}
