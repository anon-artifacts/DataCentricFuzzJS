function foo(a1) {
    var result = ["",""];
    for (let i7 = 0; i7 < 100000; ++i7) {
        const v15 = a1[i7 & 1];
        result[i7 & 1] = v15;
    }
    return result;
}
const t8 = Object.prototype;
t8[1] = 42;
var result = foo("x");
if (result[0] != "x") {
    throw "Bad result[0]: " + result[0];
}
if (result[1] != 42) {
    throw "Bad result[1]: " + result[1];
}
