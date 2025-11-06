function f0() {
}
var value1 = f0;
var value2 = 42;
function f4() {
    var result = 0;
    for (let i8 = 0; i8 < 1000000; ++i8) {
        result += typeof value1 == "function";
        result += (typeof value2 == "function") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f4();
