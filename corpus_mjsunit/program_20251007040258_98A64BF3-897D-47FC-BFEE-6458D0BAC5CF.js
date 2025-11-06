function A(a1, a2) {
    return 1 / (((((a1 + a2) * ((a1 + a2) + 1)) / 2) + a1) + 1);
}
function Au(a16, a17) {
    for (let i19 = 0; i19 < a16.length; ++i19) {
        var t = 0;
        for (let i28 = 0; i28 < a16.length; ++i28) {
            t += A(i19, i28) * a16[i28];
        }
        a17[i19] = t;
    }
}
function Atu(a38, a39) {
    for (let i41 = 0; i41 < a38.length; ++i41) {
        var t = 0;
        for (let i50 = 0; i50 < a38.length; ++i50) {
            t += A(i50, i41) * a38[i50];
        }
        a39[i41] = t;
    }
}
function AtAu(a60, a61, a62) {
    Au(a60, a62);
    Atu(a62, a61);
}
function spectralnorm(a66) {
    var i;
    var u = [];
    var v = [];
    var w = [];
    var vv = 0;
    var vBv = 0;
    for ((() => {
            i = 0;
        })();
        i < a66;
        ++i) {
        u[i] = 1;
        w[i] = 0;
        v[i] = 0;
    }
    for ((() => {
            i = 0;
        })();
        i < 10;
        ++i) {
        AtAu(u, v, w);
        AtAu(v, u, w);
    }
    for ((() => {
            i = 0;
        })();
        i < a66;
        ++i) {
        vBv += u[i] * v[i];
        vv += v[i] * v[i];
    }
    return Math.sqrt(vBv / vv);
}
var actual = "";
for (let i105 = 6; i105 <= 48; i105 *= 2) {
    actual += spectralnorm(i105) + ",";
}
