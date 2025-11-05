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
function bar(a10) {
    var result = 0;
    for (let i14 = 0; i14 < 1000000; ++i14) {
        result += foo(a10[i14 & 3]);
    }
    return result;
}
var result = bar(["a","b","c","d"]);
if (result != 2500000) {
    throw "Error: bad result: " + result;
}
