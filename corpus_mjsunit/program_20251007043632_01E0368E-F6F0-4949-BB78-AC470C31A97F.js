function testGrowDenseArray() {
    const v2 = new Array();
    var a = v2;
    for (let i5 = 0; i5 < 10; ++i5) {
        a[i5] |= 5;
    }
    return a.join(",");
}
testGrowDenseArray();
