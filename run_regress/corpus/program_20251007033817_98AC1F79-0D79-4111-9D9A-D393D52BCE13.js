function f0() {
    var a = Symbol("Cocoa");
    var l = Symbol();
    var b = Symbol();
    var c = Symbol();
    var o = { [a]: 1 };
    var p = { [a]: 2, [l]: 13 };
    var q = { [a]: 3, [b]: 3 };
    var r = { [a]: 4, [c]: 5 };
    var result = 0;
    for (let i29 = 0; i29 < 1000000; ++i29) {
        result ^= o[a];
        var tmp = o;
        o = p;
        p = q;
        q = r;
        r = tmp;
    }
    if (result != 0) {
        throw "Error: bad result: " + result;
    }
}
f0();
