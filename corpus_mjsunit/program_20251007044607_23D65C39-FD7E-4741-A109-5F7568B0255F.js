var p = { f: true };
function foo(a4, a5) {
    var c;
    if (p.f) {
        c = a4;
    }
    return a5[Math.abs(c)];
}
var result = 0;
var array = [42,43,44];
for (let i20 = 0; i20 < 1000000; ++i20) {
    result += foo(-(i20 % 3), array);
}
if (result != 42999999) {
    throw "Bad result: " + result;
}
