function testAddUndefined() {
    for (let i2 = 0; i2 < 3; ++i2) {
        (0 + void 0) && 0;
    }
}
testAddUndefined();
