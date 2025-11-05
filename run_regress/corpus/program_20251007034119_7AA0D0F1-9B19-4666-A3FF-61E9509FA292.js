var object = {};
function f2() {
}
var func = f2;
function f4() {
    return 42;
}
var func2 = f4;
function f7() {
    var result = 0;
    for (let i11 = 0; i11 < 1000000; ++i11) {
        var value1 = i11 & 1 ? func : func2;
        var value2 = i11 & 1 ? object : "hello";
        result += typeof value1 == "function";
        result += (typeof value2 == "function") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f7();
