function testTypeofHole() {
    const v3 = new Array(6);
    var a = v3;
    a[5] = 3;
    for (let i7 = 0; i7 < 6; ++i7) {
        a[i7] = typeof a[i7];
    }
    return a.join(",");
}
testTypeofHole();
