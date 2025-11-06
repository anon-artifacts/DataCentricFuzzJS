function aes(a1) {
    d = a1.slice();
    for (; a1 < 28; a1++) {
        d[0] = d[0] ^ undefined;
    }
}
var sjcl = {};
function f13(a14, a15) {
    return d ? a14 : [];
}
function f19(a20, a21) {
    return a20;
}
sjcl.bitArray = { concat: f13, clamp: f19 };
function G(a24, a25, a26, a27, a28, a29) {
    var g = [];
    var h = sjcl.bitArray;
    var f = [];
    f = h.concat(f, a26);
    if (a26) {
        g = [];
    } else {
        a26 = h.concat([], []);
    }
    h.concat(g, a27);
    h.clamp(f, [1,2,3]);
}
function decrypt(a48, a49, a50, a51, a52) {
    G(a48, 1, a50, a51, a52, a49);
    var g = [];
    var h = sjcl.bitArray;
    var f = [];
    h.concat(f, a50);
    if (a50) {
        g = [];
    } else {
        a50 = h.concat([], []);
    }
    h.concat(g, a51);
    h.concat([], a50).concat.slice;
}
const v71 = [];
aes(sjcl.bitArray.clamp(v71));
decrypt(1, 2, 3);
