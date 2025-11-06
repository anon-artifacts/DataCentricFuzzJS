function f(a1, a2) {
    var result = 0;
    for (let i6 = 0; i6 < 1000; i6++) {
        result = (result + Math.imul(a1, a2)) | 0;
    }
    return result;
}
var result = 0;
for (let i20 = 0.5; i20 < 1000; i20++) {
    result = result ^ f(i20, i20);
}
if (result != 574687104) {
    throw "Bad result: " + result;
}
