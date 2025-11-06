var value1 = void 0;
var value2 = "hello";
function f5() {
    var result = 0;
    for (let i9 = 0; i9 < 1000000; ++i9) {
        result += typeof value1 == "undefined";
        result += (typeof value2 == "undefined") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f5();
