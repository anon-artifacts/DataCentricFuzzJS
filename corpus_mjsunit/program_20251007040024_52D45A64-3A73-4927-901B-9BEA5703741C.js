function g1(a1, a2) {
    a2[0] = 88;
}
function f1(a5, a6, a7) {
    var res = 0;
    for (let i11 = 0; i11 < 50; i11++) {
        res += a5 + a6;
        if (i11 > 10) {
            a7.apply(null, arguments);
        }
    }
    return res;
}
var o1 = { apply: g1 };
f1(3, 5, o1);
f1(3, 5, o1);
function g2(a34, a35) {
    a35[0] = 88;
}
function f2(a38, a39, a40) {
    'use strict';
    var res = 0;
    for (let i44 = 0; i44 < 50; i44++) {
        res += a38 + a39;
        if (i44 > 10) {
            a40.apply(null, arguments);
        }
    }
    return res;
}
var o2 = { apply: g2 };
f2(3, 5, o2);
f2(3, 5, o2);
