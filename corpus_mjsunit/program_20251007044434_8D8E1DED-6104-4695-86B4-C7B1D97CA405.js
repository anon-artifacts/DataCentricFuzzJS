function f1(a2) {
    var x = 0;
    var n = 1000000;
    for (let i8 = 0; i8 < n; ++i8) {
        var y = a2;
        y++;
        x += y;
    }
    if (x != (n * 2)) {
        throw "Error: bad result: " + x;
    }
}
f1(true);
