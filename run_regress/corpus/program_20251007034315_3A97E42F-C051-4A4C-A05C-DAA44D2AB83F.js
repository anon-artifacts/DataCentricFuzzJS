function f0(a1, a2) {
    a1 in a2;
    return a1;
}
const v6 = new Int32Array(1000);
for (let i8 = 0; i8 < 1001; i8++) {
    f0(i8, v6);
    v6.hasOwnProperty(i8);
}
