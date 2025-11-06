function doTestDifferingArgc(a1, a2) {
    var k = 0;
    for (let i6 = 0; i6 < 10; i6++) {
        k += i6;
    }
    return k;
}
function testDifferingArgc() {
    var x = 0;
    x += doTestDifferingArgc(1, 2);
    x += doTestDifferingArgc(1);
    x += doTestDifferingArgc(1, 2, 3);
    return x;
}
testDifferingArgc();
45 * 3;
