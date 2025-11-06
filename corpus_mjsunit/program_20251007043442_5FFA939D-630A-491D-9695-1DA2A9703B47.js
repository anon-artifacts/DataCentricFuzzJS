function S() {
    const v3 = new Float32Array(1);
    var t = v3;
    var k = 0;
    var xx = 19;
    var gridRes = 64;
    for (let i12 = 0; i12 < 100; i12++) {
        t[k] = -1 + ((2 * xx) / gridRes);
    }
    return t[0];
}
S();
-0.40625;
