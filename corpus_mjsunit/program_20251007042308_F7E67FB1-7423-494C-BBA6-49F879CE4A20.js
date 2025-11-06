function f2(a3) {
    const v6 = new Int8Array(100);
    for (let i8 = 0; i8 < v6.length; ++i8) {
        v6[i8] = i8;
    }
    return v6;
}
try { noInline(f2, f2, noInline, -2147483648); } catch (e) {}
function f16(a17, a18) {
    return a17[a18];
}
var o = f2();
for (let i23 = 0; i23 < 10000; ++i23) {
    var result = f16(o, i23 % o.length);
}
