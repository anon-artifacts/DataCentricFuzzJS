function test0() {
    var arrObj0 = {};
    function f3() {
    }
    var func2 = f3;
    arrObj0.method0 = func2;
    const v7 = new Int32Array(2);
    var i32 = v7;
    var VarArr0 = 1;
    var __loopvar0 = 0;
    for (const v13 in i32) {
        if (v13.indexOf("method") != -1) {
            continue;
        }
        if (__loopvar0++ > 3) {
            break;
        }
        const v23 = Object.prototype;
        const v28 = arrObj0.length ? 351445441 : -496151049;
        const v29 = VarArr0[1];
        arrObj0.method0.call(v23, v28, v29);
    }
}
test0();
test0();
test0();
print("PASSED\n");
function test1() {
    var obj0 = {};
    function f41() {
    }
    var func1 = f41;
    obj0.method0 = func1;
    const v45 = new Array(10);
    var ary = v45;
    function _array2iterate(a48) {
        for (const v49 in a48) {
            if (a48[v49] instanceof Array) {
                _array2iterate(a48[v49]);
            }
            const v54 = ary[1];
            obj0.method0.call(obj0, v54);
        }
    }
    _array2iterate([[obj0.prop1,[obj0.prop0]]]);
}
test1();
test1();
test1();
print("PASSED\n");
function test2() {
    function bar0() {
        this.prop0;
    }
    var obj = { func: bar0 };
    var __loopvar1 = 0;
    do {
        __loopvar1++;
        function v5524() {
            if (false) {
                var uniqobj0 = 1;
            } else {
                return obj.func.call(uniqobj0);
            }
        }
        v5524();
    } while (1 && (__loopvar1 < 3))
}
test2();
test2();
test2();
print("PASSED\n");
