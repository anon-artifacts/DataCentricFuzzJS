function testDivisionFloat() {
    var a = 32768;
    var b;
    while (b !== 1) {
        a = (b = a / 2);
    }
    return a === 1;
}
testDivisionFloat();
