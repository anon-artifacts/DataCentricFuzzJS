var value1 = true;
var value2 = "hello";
function f4() {
    var result = 0;
    for (let i8 = 0; i8 < 1000000; ++i8) {
        result += typeof value1 == "boolean";
        result += (typeof value2 == "boolean") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f4();
