function testArrayDensityChange() {
    var x = [];
    var count = 0;
    for (let i6 = 0; i6 < 100; ++i6) {
        x[i6] = "asdf";
    }
    for (let i14 = 0; i14 < x.length; ++i14) {
        if (i14 == 51) {
            x[199] = "asdf";
        }
        if (x[i14]) {
            count += x[i14].length;
        }
    }
    return count;
}
testArrayDensityChange();
