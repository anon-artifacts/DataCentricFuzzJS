function test0() {
    var arrObj0 = {};
    function f3() {
        for (; arrObj0.prop1;) {
            __loopSecondaryVar4_0 = 2;
            break;
        }
        return 1;
    }
    var func0 = f3;
    function f9() {
        var __loopvar4 = 8;
        for (;;) {
            if (__loopvar4 > 8) {
                break;
            }
            __loopvar4++;
            func0() >= 0 ? func0() : 0;
        }
    }
    var func2 = f9;
    return func2(func2());
}
test0();
test0();
