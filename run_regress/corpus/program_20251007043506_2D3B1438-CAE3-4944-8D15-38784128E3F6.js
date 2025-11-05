function f0() {
    var result;
    for (let i4 = 0; i4 < 1000000; ++i4) {
        result = String.fromCharCode(1000);
    }
    return result;
}
var result = f0();
if (result != "Ϩ") {
    throw "Error: bad result: " + result;
}
