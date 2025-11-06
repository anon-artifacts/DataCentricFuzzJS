function foo(a1) {
    switch (a1) {
        case "a":
            return 1;
        case "b":
            return 2;
        case "c":
            return 3;
        default:
            return 4;
    }
}
function bar() {
    var result = 0;
    for (let i13 = 0; i13 < 1000000; ++i13) {
        result += foo("a");
    }
    return result;
}
var result = bar();
if (result != 1000000) {
    throw "Error: bad result: " + result;
}
