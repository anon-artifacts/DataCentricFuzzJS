function testModuloWithNegative1() {
    var v = 0;
    for (let i4 = 0; i4 < 2; ++i4) {
        c = v;
        v -= 1;
        for (let i13 = 0; i13 < 2; ++i13) {
            c %= -1;
        }
    }
    return 1 / c;
}
testModuloWithNegative1();
-Infinity;
