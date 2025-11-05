function testGetThis() {
    for (let i2 = 0; i2 < 3; ++i2) {
        function f8() {
            return this;
        }
        f8();
    }
    return "ok";
}
testGetThis();
