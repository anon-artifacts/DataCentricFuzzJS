function f0() {
    var re = /foo/g;
    re.exec("bar foo bar");
    var result = 0;
    var n = 10000000;
    for (let i10 = 0; i10 < n; ++i10) {
        result += re.lastIndex;
    }
    if (result != (7 * n)) {
        throw "Error: bad result: " + result;
    }
}
f0();
