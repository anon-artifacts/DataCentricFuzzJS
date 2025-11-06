function testBug465272() {
    const v3 = new Array(5);
    var a = v3;
    for (j = 0; j < 5; ++j) {
        a[j] = "" + (5 - 2);
    }
    return a.join(",");
}
testBug465272();
