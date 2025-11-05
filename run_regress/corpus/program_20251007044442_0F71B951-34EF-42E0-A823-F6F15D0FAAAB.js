function testSetPropNeitherMissNorHit() {
    for (let i2 = 0; i2 < 5; ++i2) {
        const t2 = {};
        t2.__proto__ = 1;
        if (1) {
        }
    }
    return "ok";
}
testSetPropNeitherMissNorHit();
