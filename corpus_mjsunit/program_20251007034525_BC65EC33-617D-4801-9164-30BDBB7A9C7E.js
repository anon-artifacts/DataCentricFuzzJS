function foo(a1) {
    var result = 0;
    for (let v4 in a1) {
        var tmp = v4++;
        result += a1[v4];
        result += tmp;
    }
    return result;
}
var result = foo({ f: 42 });
if (("" + result) != "NaN") {
    throw "Error: bad result: " + result;
}
