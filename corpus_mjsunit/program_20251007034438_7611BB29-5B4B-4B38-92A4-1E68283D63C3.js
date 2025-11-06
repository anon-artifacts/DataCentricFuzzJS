function testFloatArrayIndex() {
    var a = [];
    for (let i4 = 0; i4 < 10; ++i4) {
        a[3] = 5;
        a[3.5] = 7;
    }
    return (a[3] + ",") + a[3.5];
}
testFloatArrayIndex();
