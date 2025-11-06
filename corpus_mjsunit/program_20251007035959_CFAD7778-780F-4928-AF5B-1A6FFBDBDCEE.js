var p = { f: true };
function foo(a4, a5) {
    var c;
    if (p.f) {
        c = a4;
    }
    return a5[Math.abs(c)];
}
var result = 0;
var array = [42,43,44,45];
for (let i21 = 0; i21 < 500000; ++i21) {
    result += foo(-((i21 % 3) + 1), array);
}
if (result != 21999999) {
    throw "Bad result: " + result;
}
