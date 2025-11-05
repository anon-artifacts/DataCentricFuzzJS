function f1(a2) {
    var x = 42;
    var n = 1000000;
    for (let i8 = 0; i8 < n; ++i8) {
        x %= a2;
    }
    if (x != 0) {
        throw "Error: bad result: " + x;
    }
}
f1(true);
