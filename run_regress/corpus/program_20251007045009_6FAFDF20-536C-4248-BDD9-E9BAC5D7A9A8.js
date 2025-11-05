var n = 16;
const v3 = new Int32Array(n);
var a = v3;
for (let i6 = 0; i6 < n; ++i6) {
    a[i6] = i6;
}
const v11 = new Int32Array(n);
var b = v11;
for (let i14 = 0; i14 < n; ++i14) {
    b[i14] = i14 * 2;
}
a.set(b, 0.99);
for (let i24 = 0; i24 < n; ++i24) {
    a[i24];
    b[i24];
}
