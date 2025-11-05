function stringHash(a1) {
    var h = 0;
    var len = a1.length;
    for (let i7 = 0; i7 < len; i7++) {
        h = (((31 * h) | 0) + a1[i7]) | 0;
    }
    return h;
}
const v22 = new Int16Array(1000);
var array = v22;
for (let i25 = 0; i25 < array.length; ++i25) {
    array[i25] = i25;
}
var result = 0;
for (let i34 = 0; i34 < 300; ++i34) {
    result += stringHash(array);
}
if (result != 168792418800) {
    throw "Bad result" + result;
}
