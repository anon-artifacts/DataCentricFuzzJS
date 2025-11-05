function add(a1, a2) {
    if (a1 & 1) {
        return a1 + a2;
    } else {
        return a2 + a1;
    }
}
function runBinop(a8, a9, a10) {
    return a8(a9, a10);
}
var accum = 0;
for (let i15 = 0; i15 < 1000; ++i15) {
    accum += add(1, 1);
}
var accum = 0;
for (let i28 = 0; i28 < 11000; ++i28) {
    accum = runBinop(add, i28, i28);
}
var t30 = 1 << 30;
var t31 = t30 + t30;
var result = runBinop(add, t31, t31);
Math.pow(2, 32);
