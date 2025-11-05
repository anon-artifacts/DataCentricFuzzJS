const v2 = new Int32Array(1);
function f3(a4) {
    v2[0] = a4;
    return v2[0];
}
function f6(a7, a8) {
    f3(a7) != a8;
}
for (let i12 = 0; i12 < 100000; ++i12) {
    f6(i12 + 0.5, i12);
}
f6(2147483648);
