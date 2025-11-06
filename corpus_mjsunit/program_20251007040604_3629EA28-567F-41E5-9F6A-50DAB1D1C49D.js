function add(a1, a2) {
    return a1 + a2;
}
function runBinop(a5, a6, a7) {
    return a5(a6, a7);
}
var accum = 0;
for (let i12 = 0; i12 < 1000; ++i12) {
    accum += add(1, 1);
}
var accum = 0;
for (let i25 = 0; i25 < 10100; ++i25) {
    accum = runBinop(add, i25, i25);
}
var t30 = 1 << 30;
var t31 = t30 + t30;
var result = runBinop(add, t31, t31);
Math.pow(2, 32);
