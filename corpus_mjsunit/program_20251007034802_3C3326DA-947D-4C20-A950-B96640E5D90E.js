function f0() {
    var a = Symbol();
    var b = Symbol();
    var c = Symbol();
    var d = Symbol();
    var e = Symbol();
    var f = Symbol();
    var g = Symbol();
    var h = Symbol();
    var i = Symbol();
    var j = Symbol();
    var k = Symbol();
    var l = Symbol();
    const v37 = {
        [a]: 1,
        [b]: 2,
        [c]: 3,
        [d]: 4,
        [e]: 5,
        [f]: 6,
        [g]: 7,
        [h]: 8,
        [i]: 9,
        [j]: 10,
        [k]: 11,
    };
    var o = v37;
    const v51 = {
        [a]: 2,
        [b]: 3,
        [c]: 4,
        [d]: 5,
        [e]: 6,
        [f]: 7,
        [g]: 8,
        [h]: 9,
        [i]: 10,
        [j]: 11,
        [k]: 12,
        [l]: 13,
    };
    var p = v51;
    var result = 0;
    for (let i56 = 0; i56 < 1000000; ++i56) {
        result += (((((((((o[a] ^ o[b]) ^ o[c]) ^ o[d]) ^ o[e]) ^ o[f]) ^ o[g]) ^ o[h]) ^ o[i]) ^ o[j]) ^ o[k];
        var tmp = o;
        o = p;
        p = tmp;
    }
    if (result != 6500000) {
        throw "Error: bad result: " + result;
    }
}
f0();
