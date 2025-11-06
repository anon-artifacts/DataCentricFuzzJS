function test0() {
    var obj2 = {};
    function f3() {
        function func5(a5) {
            this.prop0 = a5;
        }
        const v7 = new func5();
        obj7 = v7;
    }
    var func1 = f3;
    obj2.method1 = func1;
    obj7 = 1;
    var __loopvar0 = 2;
    for (;;) {
        if (__loopvar0 == 3) {
            break;
        }
        __loopvar0++;
        obj2.method1(obj7);
    }
}
test0();
test0();
print("PASSED");
