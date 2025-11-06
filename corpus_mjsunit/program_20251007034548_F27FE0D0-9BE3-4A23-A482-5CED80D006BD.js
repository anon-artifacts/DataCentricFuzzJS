function testThinLoopDemote() {
    function f() {
        var k = 1;
        for (let i5 = 0; i5 < 4; i5++) {
            k = k * 10;
        }
        return k;
    }
    f();
    return f();
}
testThinLoopDemote();
