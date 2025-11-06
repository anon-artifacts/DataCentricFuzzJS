function f() {
    const v3 = new Float32Array(1);
    var t = v3;
    t[t.length] = 1;
    return t[t.length];
}
for (let i10 = 0; i10 < 5; i10++) {
    f();
}
