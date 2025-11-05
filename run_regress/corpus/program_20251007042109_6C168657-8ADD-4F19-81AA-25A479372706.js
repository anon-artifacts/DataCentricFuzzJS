function f0() {
    return -2147483648;
}
var o = { valueOf: f0 };
function f5() {
    return 0;
}
var s = { valueOf: f5 };
for (let i10 = 0; i10 < 70; i10++) {
    o >>> 1;
    o >>> 0;
    1 >>> s;
    -1 >>> s;
}
