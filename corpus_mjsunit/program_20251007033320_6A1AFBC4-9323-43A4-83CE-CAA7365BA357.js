function testBranchingLoop() {
    var x = 0;
    for (let i4 = 0; i4 < 100; ++i4) {
        if (i4 == 51) {
            x += 10;
        }
        x++;
    }
    return x;
}
testBranchingLoop();
