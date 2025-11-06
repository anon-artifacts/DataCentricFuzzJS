function testStrict() {
    var n = 10;
    var a = [];
    for (let i6 = 0; i6 < 10; ++i6) {
        a[0] = n === 10;
        a[1] = n !== 10;
        a[2] = n === null;
        a[3] = n == null;
    }
    return a.join(",");
}
testStrict();
