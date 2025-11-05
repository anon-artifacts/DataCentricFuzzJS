var o = {};
function Ctor() {
}
function f3() {
    let v4 = o.x;
    return v4++;
}
const t7 = Ctor.prototype;
t7.valueOf = f3;
const v7 = new Ctor();
var c = v7;
function f9(a10, a11) {
    var n = 0;
    for (let i15 = 0; i15 < 2; i15++) {
        n = a10.x + a11;
    }
    return n;
}
var test_add = f9;
test_add.test_result1 = 4;
function f25() {
    for (let i27 = 0; i27 < 1; i27++) {
        var obj = { x: 1.23, z: 1 };
        for (let i38 = 0; i38 < 1; i38++) {
            obj.x += obj.z;
        }
    }
    return obj.x;
}
var test_add_assign = f25;
test_add_assign.test_result1 = 2.23;
function f49(a50, a51) {
    var n = 0;
    for (let i55 = 0; i55 < 2; i55++) {
        n = a50.x - a51;
    }
    return n;
}
var test_sub = f49;
test_sub.test_result1 = 0;
function f65(a66, a67) {
    var n = 0;
    for (let i71 = 0; i71 < 2; i71++) {
        n = a66.x * a67;
    }
    return n;
}
var test_mul = f65;
test_mul.test_result1 = 4;
function f81(a82, a83) {
    var n = 0;
    for (let i87 = 0; i87 < 2; i87++) {
        n = a82.x / a83;
    }
    return n;
}
var test_div = f81;
test_div.test_result1 = 1;
function f97(a98, a99) {
    var n = 0;
    for (let i103 = 0; i103 < 2; i103++) {
        n = a98.x % a99;
    }
    return n;
}
var test_mod = f97;
test_mod.test_result1 = 0;
function f113(a114, a115) {
    var n = 0;
    for (let i119 = 0; i119 < 2; i119++) {
        n = -a115;
        n += a114.x;
    }
    return n;
}
var test_neg = f113;
test_neg.test_result1 = 1;
function f129(a130, a131) {
    var n = 0;
    for (let i135 = 0; i135 < 2; i135++) {
        n += a130.x & a131;
    }
    return n;
}
var test_bitand = f129;
test_bitand.test_result1 = 3;
function f145(a146, a147) {
    var n = 0;
    for (let i151 = 0; i151 < 2; i151++) {
        n += a146.x | a147;
    }
    return n;
}
var test_bitor = f145;
test_bitor.test_result1 = 3;
function f161(a162, a163) {
    var n = 0;
    for (let i167 = 0; i167 < 2; i167++) {
        n += a162.x ^ a163;
    }
    return n;
}
var test_bitxor = f161;
test_bitxor.test_result1 = 0;
function f177(a178, a179) {
    var n = 0;
    for (let i183 = 0; i183 < 2; i183++) {
        n += a178.x;
        n += ~a179;
    }
    return n;
}
var test_bitnot = f177;
test_bitnot.test_result1 = -2;
function f194(a195, a196) {
    var n = 0;
    for (let i200 = 0; i200 < 2; i200++) {
        n += a195.x << a196;
    }
    return n;
}
var test_bitshiftleft = f194;
test_bitshiftleft.test_result1 = 10;
function f210(a211, a212) {
    var n = 0;
    for (let i216 = 0; i216 < 2; i216++) {
        n += (a211.x << 10) >> a212;
    }
    return n;
}
var test_bitshiftright = f210;
test_bitshiftright.test_result1 = 1024;
function f228(a229, a230) {
    var n = 0;
    for (let i234 = 0; i234 < 2; i234++) {
        n += (-a229.x << 10) >>> a230;
    }
    return n;
}
var test_unsignedbitshiftright = f228;
test_unsignedbitshiftright.test_result1 = 3221224448;
function f247(a248, a249) {
    var n = 0;
    for (let i253 = 0; i253 < 2; i253++) {
        if (a248.x < a249) {
            n += a248.x;
        } else {
            n -= a248.x;
        }
    }
    return n;
}
var test_less = f247;
test_less.test_result1 = -5;
function f266(a267, a268) {
    var n = 0;
    for (let i272 = 0; i272 < 2; i272++) {
        if (a267.x <= a268) {
            n += a267.x;
        } else {
            n -= a267.x;
        }
    }
    return n;
}
var test_less_equal = f266;
test_less_equal.test_result1 = 5;
function f284(a285, a286) {
    var n = 0;
    for (let i290 = 0; i290 < 2; i290++) {
        if (a285.x > a286) {
            n += a285.x;
        } else {
            n -= a285.x;
        }
    }
    return n;
}
var test_greater = f284;
test_greater.test_result1 = -5;
function f303(a304, a305) {
    var n = 0;
    for (let i309 = 0; i309 < 2; i309++) {
        if (a304.x >= a305) {
            n += a304.x;
        } else {
            n -= a304.x;
        }
    }
    return n;
}
var test_greater_equal = f303;
test_greater_equal.test_result1 = 5;
function f321(a322, a323) {
    var n = 0;
    for (let i327 = 0; i327 < 2; i327++) {
        if (a322.x == a323) {
            n += a322.x;
        } else {
            n -= a322.x;
        }
    }
    return n;
}
var test_equal = f321;
test_equal.test_result1 = 5;
function f339(a340, a341) {
    var n = 0;
    for (let i345 = 0; i345 < 2; i345++) {
        if (a340.x != a341) {
            n += a340.x;
        } else {
            n -= a340.x;
        }
    }
    return n;
}
var test_not_equal = f339;
test_not_equal.test_result1 = -5;
function f358(a359, a360) {
    var n = 0;
    for (let i364 = 0; i364 < 2; i364++) {
        var b = a359.x < a360;
        if (b) {
            n += a359.x;
        } else {
            n -= a359.x;
        }
    }
    return n;
}
var test_compare_less = f358;
test_compare_less.test_result1 = -5;
function f378(a379, a380) {
    var n = 0;
    for (let i384 = 0; i384 < 2; i384++) {
        var b = a379.x <= a380;
        if (b) {
            n += a379.x;
        } else {
            n -= a379.x;
        }
    }
    return n;
}
var test_compare_less_equal = f378;
test_compare_less_equal.test_result1 = 5;
function f397(a398, a399) {
    var n = 0;
    for (let i403 = 0; i403 < 2; i403++) {
        var b = a398.x > a399;
        if (b) {
            n += a398.x;
        } else {
            n -= a398.x;
        }
    }
    return n;
}
var test_compare_greater = f397;
test_compare_greater.test_result1 = -5;
function f417(a418, a419) {
    var n = 0;
    for (let i423 = 0; i423 < 2; i423++) {
        var b = a418.x >= a419;
        if (b) {
            n += a418.x;
        } else {
            n -= a418.x;
        }
    }
    return n;
}
var test_compare_greater_equal = f417;
test_compare_greater_equal.test_result1 = 5;
function f436(a437, a438) {
    var n = 0;
    for (let i442 = 0; i442 < 2; i442++) {
        var b = a437.x == a438;
        if (b) {
            n += a437.x;
        } else {
            n -= a437.x;
        }
    }
    return n;
}
var test_compare_equal = f436;
test_compare_equal.test_result1 = 5;
function f455(a456, a457) {
    var n = 0;
    for (let i461 = 0; i461 < 2; i461++) {
        var b = a456.x != a457;
        if (b) {
            n += a456.x;
        } else {
            n -= a456.x;
        }
    }
    return n;
}
var test_compare_not_equal = f455;
test_compare_not_equal.test_result1 = -5;
function f477() {
    print("no!");
}
Object.defineProperty(this, "getme", { get: f477 });
function f484() {
    for (let i486 = 0; i486 < 10; i486++) {
        if (this.undefined) {
            var g = getme;
            g.x;
        }
    }
}
f484();
for (const v499 in this) {
    if (((typeof this[v499] == "function") && (v499 != "Ctor")) && (this[v499].test_result1 != undefined)) {
        o.x = 1;
        var ret = this[v499](o, c);
        if (ret == this[v499].test_result1) {
            print("PASS: " + v499);
        } else {
            print((((("FAIL: " + v499) + ": expected ") + this[v499].test_result1) + ", got ") + ret);
        }
    }
}
