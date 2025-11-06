function testConstIf() {
    var x;
    for (let i4 = 0; i4 < 5; ++i4) {
        if (1.1 || 5) {
        }
        x = 2;
    }
    return x;
}
testConstIf();
