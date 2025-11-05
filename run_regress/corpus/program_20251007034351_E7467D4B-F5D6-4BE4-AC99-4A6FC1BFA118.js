function testEliminatedGuardWithinAnchor() {
    for (let i2 = 0; i2 < 5; ++i2) {
        i2 / (i2 * i2);
    }
    return "ok";
}
testEliminatedGuardWithinAnchor();
