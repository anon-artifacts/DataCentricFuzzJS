function testSlowArrayLength() {
    var counter = 0;
    var a = [];
    a[10000 - 1] = 0;
    for (let i10 = 0; i10 < a.length; i10++) {
        counter++;
    }
    return counter;
}
testSlowArrayLength();
