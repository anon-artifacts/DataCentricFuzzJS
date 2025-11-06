function testNativeMax() {
    var out = [];
    var k;
    for (let i6 = 0; i6 < 5; ++i6) {
        k = Math.max(k, i6);
    }
    out.push(k);
    k = 0;
    for (let i17 = 0; i17 < 5; ++i17) {
        k = Math.max(k, i17);
    }
    out.push(k);
    for (let i27 = 0; i27 < 5; ++i27) {
        k = Math.max(0, -0);
    }
    out.push((1 / k) < 0);
    return out.join(",");
}
testNativeMax();
