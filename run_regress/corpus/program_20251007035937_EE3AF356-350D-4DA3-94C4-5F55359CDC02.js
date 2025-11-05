new Uint8ClampedArray();
new Int8Array();
new Int16Array();
function f8() {
    return arguments;
}
function f10(a11, a12, a13) {
    return (a11 + a12) + a13;
}
function f16(a17, a18, a19) {
    return f10.apply(0, f8(a18, a19, 42));
}
for (let i25 = 0; i25 < 10000; ++i25) {
    f16(1, 2, 3, 2, i25, 257) > 47;
}
