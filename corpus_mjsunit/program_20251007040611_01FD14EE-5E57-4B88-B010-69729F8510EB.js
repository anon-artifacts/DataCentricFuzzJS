var shouldBailout = true;
function test0() {
    var obj1 = {};
    var arrObj0 = {};
    function f7(a8, a9, a10) {
        ary.pop();
        for (let i14 = 0;
            (() => {
                const v16 = i14 < 3;
                const v17 = obj1.prop2;
                a9[1] = "x";
                shouldBailout ? "x" : undefined;
                const v24 = a9[1] >= 0;
                a9[1] = "x";
                shouldBailout ? "x" : undefined;
                return v16 && (v17 < ary[(v24 ? a9[1] : 0) & 15]);
            })();
            i14++) {
        }
    }
    var func0 = f7;
    function f42(a43, a44, a45) {
        func0(1, ary, 1);
    }
    var func1 = f42;
    function f51() {
        var __loopvar4 = 0;
        do {
            __loopvar4++;
        } while (func1.call(arrObj0, 1, func0(1, 1, 1), 1) && (__loopvar4 < 3))
    }
    var func2 = f51;
    const v68 = new Array(10);
    var ary = v68;
    if (func2.call(arrObj0)) {
    }
}
test0();
test0();
test0();
test0();
test0();
test0();
runningJITtedCode = true;
test0();
test0();
test0();
test0();
test0();
test0();
shouldBailout = true;
test0();
print("pass");
