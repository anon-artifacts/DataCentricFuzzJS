function g0() {
    with ({}) {
    }
}
function f0(a3, a4) {
    var a = a3 >>> 0;
    a = (a - 1) + 1;
    g0();
    var b = a4 / 2;
    return ~(a + b);
}
f0(-1, 0);
f0(-1, 1);
function g1() {
    with ({}) {
    }
}
function f1(a31, a32) {
    var a = a31 >>> 0;
    a = (a - 1) + 1;
    g1();
    var b = Math.pow(a32 / 2, a32);
    return ~(a + b);
}
f1(-1, 0);
-1;
f1(-1, 1);
function f2(a60) {
    return ~((((~0 | 0) >>> 0) || 0) + Math.pow(Math.cos(a60 >>> 0), Math.atan2(0, a60)));
}
f2(0);
-1;
f2(-9999);
