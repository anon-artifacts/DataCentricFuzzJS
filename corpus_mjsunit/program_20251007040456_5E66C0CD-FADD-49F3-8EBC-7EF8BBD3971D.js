var object = {};
function f2() {
    var result = 0;
    for (let i6 = 0; i6 < 1000000; ++i6) {
        var value1 = i6 & 1 ? 42.5 : 42;
        var value2 = i6 & 1 ? "hello" : object;
        result += typeof value1 == "number";
        result += (typeof value2 == "number") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f2();
