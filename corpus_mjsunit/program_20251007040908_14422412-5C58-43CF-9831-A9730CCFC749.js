var o = {};
function foo(a3) {
    var result = 0;
    for (let i7 = 0; i7 < a3.length; ++i7) {
        result += a3[i7];
    }
    return result;
}
o.length = 100;
for (let i16 = 0; i16 < o.length; ++i16) {
    o[i16] = i16;
}
var result = 0;
for (let i25 = 0; i25 < 10000; ++i25) {
    result += foo(o);
}
if (result != 49500000) {
    throw "Error: bad result " + result;
}
