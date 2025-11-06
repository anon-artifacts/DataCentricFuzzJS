var p = { f: true };
function foo(a4, a5, a6) {
    var c;
    if (p.f) {
        c = a5;
    }
    return a6[a4 + c];
}
var result = 0;
var array = [42,43,44];
for (let i20 = 0; i20 < 1000000; ++i20) {
    result += foo(1 - i20, i20 + 1, array);
}
if (result != 44000000) {
    throw "Bad result: " + result;
}
