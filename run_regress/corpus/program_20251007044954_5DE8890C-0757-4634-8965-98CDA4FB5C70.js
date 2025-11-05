function f0() {
    var a = "a";
    var b = "b";
    var c = "c";
    var d = "d";
    var e = "e";
    var f = "f";
    var g = "g";
    var h = "h";
    var i = "i";
    var j = "j";
    var k = "k";
    const v34 = {
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
    var o = v34;
    var result = 0;
    for (let i39 = 0; i39 < 1000000; ++i39) {
        result += (((o[a] ^ o[b]) | ((o[c] ^ (o[d] & o[e])) ^ o[f])) | ((o[g] ^ (o[h] & o[i])) ^ o[j])) | o[k];
    }
    if (result != 15000000) {
        throw "Error: bad result: " + result;
    }
}
f0();
