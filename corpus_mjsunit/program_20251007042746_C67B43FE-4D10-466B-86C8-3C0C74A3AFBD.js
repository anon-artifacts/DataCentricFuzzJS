function testDateNow() {
    var time = Date.now();
    for (let i5 = 0; i5 < 9; ++i5) {
        time = Date.now();
    }
    return "ok";
}
testDateNow();
