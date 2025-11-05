function test0() {
    var GiantPrintArray = [];
    var arrObj0 = {};
    var VarArr0 = Array();
    VarArr0[5] = 1;
    var i = 0;
    do {
        i++;
        function f13() {
            GiantPrintArray.push("getter");
            print("Inside getter FAILED");
            return 5;
        }
        Object.defineProperty(arrObj0, "5", { get: f13, configurable: true });
        VarArr0[10] = 1;
        VarArr0.slice();
        arrObj0 = Object.prototype;
    } while (i < 2)
    delete arrObj0["5"];
    const t18 = Object.prototype;
    delete t18["5"];
}
function test1() {
    var Debug = true;
    const v40 = new Array(10);
    var ary1 = v40;
    const v43 = Object.prototype;
    function f45() {
        if (Debug) {
            print("Inside getter Object 1");
        }
        return 3;
    }
    Object.defineProperty(v43, "5", { get: f45 });
    const v52 = Array.prototype;
    function f54() {
        if (Debug) {
            print("Inside getter Array 1");
        }
        return 4;
    }
    Object.defineProperty(v52, "5", { get: f54 });
    slAr = ary1.slice();
    if (ary1[5] != 4) {
        print("FAIL ary1[5] = ", ary1[5]);
        print("src  Array: ", ary1);
        print("dest Array: ", slAr);
    }
}
test0();
test1();
