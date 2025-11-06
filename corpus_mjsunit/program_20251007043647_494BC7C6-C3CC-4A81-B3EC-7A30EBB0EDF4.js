function f0() {
    var f = "f";
    var g = "g";
    var o = { [f]: 1, [g]: 2 };
    var p = { [f]: 1 };
    var n = 1000000;
    for (let i15 = 0; i15 < n; ++i15) {
        o[f] = i15;
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
