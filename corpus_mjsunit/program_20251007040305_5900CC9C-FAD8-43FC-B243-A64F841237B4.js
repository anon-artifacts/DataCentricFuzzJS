function test0() {
    var obj0 = {};
    function f3() {
        return "caller";
    }
    var func1 = f3;
    function f6() {
    }
    var func3 = f6;
    obj0.method1 = func1;
    var ary = Array();
    var __loopvar1 = 9;
    for (;;) {
        if (__loopvar1 > 9) {
            break;
        }
        __loopvar1++;
        func3.call(obj0.method1(), "caller");
        const v20 = func1();
        var uniqobj12 = { 13: v20 };
    }
    "" + ary.slice();
}
test0();
test0();
print("passed");
