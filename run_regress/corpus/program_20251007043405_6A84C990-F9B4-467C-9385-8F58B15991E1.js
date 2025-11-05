var shouldBailout = false;
var repeatCount = 0;
function test0() {
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    repeatCount = 0;
    function f12(a13, a14) {
    }
    var func0 = f12;
    function f16(a17, a18, a19, a20) {
    }
    var func1 = f16;
    obj0.method0 = func1;
    const v24 = new Int8Array(3);
    var i8 = v24;
    function f29() {
        print("");
        return 3;
    }
    Object.defineProperty(this, "prop1", { get: f29, configurable: true });
    d = func1.call(obj1, 1, func0.call(arrObj0, shouldBailout ? 1 : 1, 1), 1, 1);
    obj1 = {};
    var f = 6208564406174239744;
    const v69 = (f + (1 <= 1)) / (((1 instanceof Object) <= 1) == 0 ? 1 : (1 instanceof Object) <= 1);
    const v74 = {
        prop0: 1,
        prop1: 1,
        prop2: 1,
        prop3: v69,
        prop4: 1,
        prop5: 1,
        prop6: 1,
        prop7: 1,
    };
    obj1.prop0 = v74;
    for (let i76 = 0; i76 < 3; ++i76) {
    }
    function f82() {
        function v477410(a84, a85, a86) {
            this.v477411 = a84;
            this.v477412 = a85;
            this.v477413 = a86;
            this.v477414 = 2;
            this.v477413 = 2;
        }
        function v477415() {
            v477410.prototype = {};
            var __loopvar2 = 0;
            for (const v98 in i8) {
                if (v98.indexOf("method") != -1) {
                    continue;
                }
                if (__loopvar2++ > 3) {
                    break;
                }
                const v117 = (this.prop1 != obj0.prop0) || (arrObj0.prop0 > this.prop1);
                for (const v123 in arguments[obj0.method0.call(obj0, 1, v117, 1, 1)]) {
                }
                obj0.length -= arrObj0.method0(1, 1, 1, 1);
            }
            const v132 = new v477410(1, 1, 1);
            var v477416 = v132;
            GiantPrintArray.push(v477416.v477413);
            GiantPrintArray.push(v477416.v477411);
            GiantPrintArray.push(v477416.v477412);
            GiantPrintArray.push(v477416.v477414);
        }
        repeatCount++;
        if (repeatCount > 200) {
            return 1;
        }
        v477415();
        v477415();
        const v149 = v477410.prototype;
        function f151() {
            return 100;
        }
        Object.defineProperty(v149, "v477414", { get: f151, configurable: false });
        v477415();
        return 1;
    }
    obj1.method0 = f82;
    if (shouldBailout) {
        obj0.method0 = obj1.method0;
    }
    obj0.method0(1, 1, 1, 1);
}
try {
    test0();
    runningJITtedCode = true;
    test0();
    shouldBailout = true;
    test0();
} catch(e170) {
    print(e170);
}
