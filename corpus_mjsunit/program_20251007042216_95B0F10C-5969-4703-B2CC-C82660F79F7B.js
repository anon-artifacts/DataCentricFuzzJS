var p = { f: true };
function foo(a4, a5) {
    var c;
    if (p.f) {
        c = a4;
    }
    return a5[-c];
}
var result = 0;
var array = [42,43,44];
for (let i19 = 0; i19 < 1000000; ++i19) {
    result += foo(-(i19 % 3), array);
}
if (result != 42999999) {
    throw "Bad result: " + result;
}
