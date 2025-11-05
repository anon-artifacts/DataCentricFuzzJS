function testFloatArray() {
    const v3 = new Float32Array(32);
    var v = v3;
    for (let i6 = 0; i6 < v.length; ++i6) {
        v[i6] = i6;
    }
    var t = 0;
    for (let i15 = 0; i15 < v.length; ++i15) {
        t += v[i15];
    }
    return t;
}
testFloatArray();
