var x = [9385,32112,25383,16317,30138,14565,17812,24500,2719,30174,3546,9096,15352,19120,20648,14334,7426,0,0,0];
var n = [27875,25925,30422,12227,27798,32170,10873,21748,30629,26296,20697,5125,4815,2221,14392,23369,5560,2,0,0];
var np = 18229;
var expected = [18770,31456,17999,32635,27508,29131,2856,16233,5439,27580,7093,18192,30804,5472,8529,28649,14852,0,0,0];
bpe = 0;
mask = 0;
for (bpe = 0; (1 << (bpe + 1)) > (1 << bpe); bpe++) {
}
bpe >>= 1;
mask = (1 << bpe) - 1;
const v94 = new Array(0);
sa = v94;
function copy_(a97, a98) {
    var i;
    var k = a97.length < a98.length ? a97.length : a98.length;
    for ((() => {
            i = 0;
        })();
        i < k;
        i++) {
        a97[i] = a98[i];
    }
    for ((() => {
            i = k;
        })();
        i < a97.length;
        i++) {
        a97[i] = 0;
    }
}
function copyInt_(a117, a118) {
    var i;
    var c;
    for ((() => {
            c = a118;
            i = 0;
        })();
        i < a117.length;
        i++) {
        a117[i] = c & mask;
        c >>= bpe;
    }
}
function greater(a130, a131) {
    var i;
    var k = a130.length < a131.length ? a130.length : a131.length;
    for ((() => {
            i = a130.length;
        })();
        i < a131.length;
        i++) {
        if (a131[i]) {
            return 0;
        }
    }
    for ((() => {
            i = a131.length;
        })();
        i < a130.length;
        i++) {
        if (a130[i]) {
            return 1;
        }
    }
    for ((() => {
            i = k - 1;
        })();
        i >= 0;
        i--) {
        if (a130[i] > a131[i]) {
            return 1;
        } else {
            if (a130[i] < a131[i]) {
                return 0;
            }
        }
    }
    return 0;
}
function mont_(a168, a169, a170, a171) {
    var i;
    var j;
    var c;
    var ui;
    var t;
    var kn = a170.length;
    var ky = a169.length;
    if (sa.length != kn) {
        const v189 = new Array(kn);
        sa = v189;
    }
    for (; (kn > 0) && (a170[kn - 1] == 0); kn--) {
    }
    for (; (ky > 0) && (a169[ky - 1] == 0); ky--) {
    }
    copyInt_(sa, 0);
    for ((() => {
            i = 0;
        })();
        i < kn;
        i++) {
        t = sa[0] + (a168[i] * a169[0]);
        c = (t + ((ui = ((t & mask) * a171) & mask) * a170[0])) >> bpe;
        t = a168[i];
        for ((() => {
                j = 1;
            })();
            j < ky;
            j++) {
            c += (sa[j] + (t * a169[j])) + (ui * a170[j]);
            const v237 = c & mask;
            sa[j - 1] = v237;
            c >>= bpe;
        }
        for (; j < kn; j++) {
            c += sa[j] + (ui * a170[j]);
            const v246 = c & mask;
            sa[j - 1] = v246;
            c >>= bpe;
        }
        const v249 = c & mask;
        sa[j - 1] = v249;
    }
    if (!greater(a170, sa)) {
        sub_(sa, a170);
    }
    copy_(a168, sa);
}
mont_(x, x, n, np);
var passed = expected.length == x.length;
for (let i263 = 0; i263 < expected.length; i263++) {
    if (passed) {
        passed = expected[i263] == x[i263];
    }
}
