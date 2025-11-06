function test16() {
    var obj0 = {};
    var obj1 = {};
    function f5() {
    }
    var func2 = f5;
    obj1.method0 = func2;
    var __loopvar1 = 0;
    do {
        __loopvar1++;
        obj1.method0.apply(obj0, arguments);
        obj1.method0;
    } while (1 && (__loopvar1 < 3))
}
test16();
test16();
print("PASSED\n");
