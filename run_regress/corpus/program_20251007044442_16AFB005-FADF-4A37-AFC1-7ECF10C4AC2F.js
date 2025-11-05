var shouldBailout = false;
function test0() {
    function makeArrayLength(a4) {
        if (((((a4 < 1) || (a4 > 4294967295)) || (a4 != a4)) || isNaN(a4)) || !isFinite(a4)) {
            return 100;
        } else {
            return Math.floor(a4) & 65535;
        }
    }
    var obj0 = {};
    var obj1 = {};
    const v29 = new Array();
    var IntArr0 = v29;
    var FloatArr0 = [1079966239,-2,-97174468.9,4719844297323339776,373475323,516830569.1];
    obj1.prop2 = 1434939730.1;
    const t15 = Object.prototype;
    t15.prop1 = 1;
    const t17 = Object.prototype;
    t17.prop2 = 1;
    const v48 = makeArrayLength(1);
    const t20 = Object.prototype;
    t20.length = v48;
    for (const v51 in Object.prototype) {
        let v53 = obj1.prop2;
        const v56 = v53-- >= 0;
        let v57 = obj1.prop2;
        FloatArr0[(v56 ? v57-- : 0) & 15] = "x";
        shouldBailout ? "x" : undefined;
        let v65 = obj1.prop2;
        const v68 = v65-- >= 0;
        let v69 = obj1.prop2;
        FloatArr0[(v68 ? v69-- : 0) & 15];
        IntArr0[1] = "x";
        shouldBailout ? "x" : undefined;
        obj0.prop1 = IntArr0[1];
    }
}
test0();
test0();
test0();
runningJITtedCode = true;
test0();
shouldBailout = true;
test0();
print("PASS");
