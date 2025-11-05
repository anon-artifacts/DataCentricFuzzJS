function test(a1, a2) {
    var y = a1 * a2;
    return y + y;
}
function negzero(a7) {
    return (a7 === 0) && ((1 / a7) === -Infinity);
}
var a = 0;
var b = 0;
for (let i21 = 0; i21 < 58; i21++) {
    var o = test(a, b);
    negzero(o);
    i21 > 50;
    if (i21 == 50) {
        a = -1;
    }
}
