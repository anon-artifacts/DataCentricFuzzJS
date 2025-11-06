function testIntUnderflow() {
    var ival = -2147483648 + 8;
    for (let i7 = 0; i7 < 30; i7++) {
        ival -= 2;
    }
    return ival > -2147483648;
}
testIntUnderflow();
