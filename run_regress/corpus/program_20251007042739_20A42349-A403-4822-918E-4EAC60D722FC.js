var object = {};
var array = [];
function f4() {
}
var func = f4;
function f6() {
    return 32;
}
var func2 = f6;
function f9() {
    var result = 0;
    for (let i13 = 0; i13 < 1000000; ++i13) {
        var value1 = i13 & 1 ? array : object;
        var value2 = i13 & 1 ? func : func2;
        result += typeof value1 == "object";
        result += (typeof value2 == "object") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f9();
