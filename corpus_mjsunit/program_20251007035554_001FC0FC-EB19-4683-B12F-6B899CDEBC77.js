function test0() {
    var obj0 = {};
    var protoObj0 = {};
    var obj1 = {};
    function f7() {
        const v9 = c++;
        function f10() {
        }
        f10(v9);
    }
    var func0 = f7;
    function f13() {
    }
    var func2 = f13;
    function f15() {
    }
    var func4 = f15;
    obj0.method0 = func0;
    obj0.method1 = func4;
    obj1.method0 = func2;
    obj1.method1 = obj0.method0;
    var a = -647661593;
    var c = 1650427918.1;
    Object.create(obj1);
    arrObj0 = obj1;
    var __loopvar0 = 7 + 9;
    while (a) {
        if ((__loopvar0 -= 3) == 7) {
            break;
        }
        function __callback1(a34) {
            obj1.method0 = protoObj0;
            a34();
        }
        function __callback2() {
            const v38 = arrObj0.method1;
            const v39 = { method1: v38 };
            const v40 = obj0.method1;
            const v41 = { method0: v40 };
            const v42 = arrObj0.method0;
            const v43 = { method0: v42 };
            const v44 = { lf0: v43 };
            const v45 = { lf0: v39, lf1: v41, nd2: v44 };
            const v46 = { nd0: v45 };
            var uniqobj7 = { nd1: v46 };
            var id40 = arrObj0.method1();
        }
        __callback1(__callback2);
    }
    if (c !== 1650427920.1) {
        print("fail: c === " + c);
    }
}
test0();
test0();
print("pass");
