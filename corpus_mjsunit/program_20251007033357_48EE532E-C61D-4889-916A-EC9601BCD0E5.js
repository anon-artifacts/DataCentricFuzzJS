function test0() {
    function f1() {
        var __loopvar2 = 0;
        while (arguments.callee[1] && (__loopvar2 < 3)) {
        }
    }
    var func6 = f1;
    var __loopvar1 = 0;
    do {
    } while (func6() && (__loopvar1 < 3))
    function f18(a19) {
        func6();
    }
    f18(1);
}
test0();
print("pass");
