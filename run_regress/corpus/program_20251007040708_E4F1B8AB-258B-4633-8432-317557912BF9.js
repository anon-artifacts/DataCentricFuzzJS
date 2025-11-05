var object = {};
var array = [];
function f4() {
    var result = 0;
    for (let i8 = 0; i8 < 1000000; ++i8) {
        var value1 = i8 & 1 ? array : object;
        var value2 = i8 & 1 ? Map : Set;
        result += typeof value1 == "object";
        result += (typeof value2 == "object") << 1;
    }
    if (result != 1000000) {
        throw "Error: bad result: " + result;
    }
}
f4();
