function test0() {
    var GiantPrintArray = [];
    function makeArrayLength() {
        return 100;
    }
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    function f11(a12) {
        function v0(a14) {
            for (let i16 = 0; i16 < 8; i16++) {
                function v2() {
                }
                var v3 = v2();
                GiantPrintArray.push(a12);
                GiantPrintArray.push(v3);
                a14[0] = 0;
            }
        }
        v0(arrObj0);
    }
    var func1 = f11;
    obj0.method0 = func1;
    obj1.method1 = obj0.method0;
    method0 = obj1.method1;
    const v34 = -246;
    arrObj0[arrObj0.length] = v34;
    const v36 = makeArrayLength();
    const t28 = Object.prototype;
    t28.length = v36;
    method0();
    print(GiantPrintArray);
}
test0();
test0();
