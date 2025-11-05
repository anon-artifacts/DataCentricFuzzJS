function foo() {
    var result = 0;
    for (let i4 = 0; i4 < 1; ++i4) {
        result++;
    }
    return result;
}
var result = 0;
for (let i14 = 0; i14 < 200000; ++i14) {
    result += foo();
}
if (result != 200000) {
    throw "Bad result: " + result;
}
