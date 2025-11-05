function testMulOverflow() {
    var a = [];
    for (let i4 = 0; i4 < 5; ++i4) {
        a.push(0 | (1610612745 * 1610612745));
    }
    return a.join(",");
}
testMulOverflow();
