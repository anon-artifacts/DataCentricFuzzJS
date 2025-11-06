var object = {};
var array = [];
function f4() {
}
var func = f4;
function f6() {
    var result = 0;
    for (let i10 = 0; i10 < 1000000; ++i10) {
        var value1 = i10 & 1 ? array : object;
        var value2 = i10 & 1 ? func : "hello";
        result += typeof value1 == "object";
        result += (typeof value2 == "object") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f6();
