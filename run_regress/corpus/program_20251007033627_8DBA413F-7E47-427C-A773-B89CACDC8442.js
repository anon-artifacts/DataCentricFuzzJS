function f0() {
    var f = Symbol();
    var g = Symbol();
    var o = { [f]: 1, [g]: 2 };
    var p = { [f]: 1 };
    var n = 1000000;
    for (let i16 = 0; i16 < n; ++i16) {
        o[f] = i16;
        var tmp = o;
        o = p;
        p = tmp;
    }
    if (o[f] != (n - 2)) {
        throw "Error: bad value of o.f: " + o[f];
    }
    if (p[f] != (n - 1)) {
        throw "Error: vad value of p.f: " + p[f];
    }
}
f0();
