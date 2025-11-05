var __counter = 0;
function test0() {
    __counter++;
    function leaf() {
    }
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    function f11() {
        for (const v12 in obj0) {
            if (v12.indexOf("method") != -1) {
                continue;
            }
            return leaf();
        }
        return leaf();
        do {
        } while (arrObj0)
    }
    var func0 = f11;
    function f21() {
    }
    var func2 = f21;
    obj0.method0 = func2;
    obj0.method1 = func0;
    arrObj0.method1 = func2;
    const v24 = -21449704;
    const t27 = Object.prototype;
    t27.prop0 = v24;
    var uniqobj27 = [obj1,obj0,arrObj0];
    var uniqobj28 = uniqobj27[__counter];
    uniqobj28.method1();
}
try {
    test0();
    test0();
    test0();
} catch(e35) {
    print("PASS");
}
