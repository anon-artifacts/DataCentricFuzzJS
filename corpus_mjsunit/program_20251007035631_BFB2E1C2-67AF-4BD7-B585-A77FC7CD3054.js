function testNegZero2() {
    var z = 0;
    for (let i4 = 0; i4 < 5; ++i4) {
        const v10 = -z;
        const v11 = { p: v10 };
    }
}
testNegZero2();
function testConstSwitch() {
    var x;
    for (let i17 = 0; i17 < 5; ++i17) {
        switch (1.1) {
            case NaN:
            case 2:
        }
        x = 2;
    }
    return x;
}
testConstSwitch();
