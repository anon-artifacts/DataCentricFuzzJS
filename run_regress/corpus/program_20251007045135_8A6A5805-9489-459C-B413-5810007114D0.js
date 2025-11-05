function testInterpreterReentry3() {
    for (let i2 = 0; i2 < 5; ++i2) {
        function f8() {
        }
        this["y" + i2] = f8;
    }
    function* f13(a14) {
        yield;
    }
    this.__defineGetter__("e", f13);
    return 1;
}
testInterpreterReentry3();
