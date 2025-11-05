var shouldBailout = false;
function test0() {
    var loopInvariant = 4;
    var obj1 = {};
    const v8 = new Int16Array();
    var i16 = v8;
    function _array2iterate(a11) {
        for (const v12 in a11) {
            if (v12.indexOf("") == 0) {
            }
            var __loopvar1 = loopInvariant - 6;
            for (;
                (() => {
                    const v20 = obj1.prop0;
                    function f22() {
                    }
                    Object.defineProperty(obj1, "", { get: f22, configurable: true });
                    return v20 < ~(shouldBailout ? obj1.prop0 : obj1.prop0);
                })();
                obj1++) {
                if (obj1) {
                }
            }
            _array2iterate(a11[v12]);
            const v38 = obj1.prop0 >> "caller";
            const v42 = i16[53 & 255];
            const v45 = obj1.prop0 >> "";
            const v48 = new RegExp("xyz");
            const v61 = v48 instanceof ((typeof Function == "function") && (Function[Symbol.toStringTag] == "AsyncFunction") ? Function : Object);
            obj1[8] = "x";
            shouldBailout ? "x" : undefined;
            const v66 = obj1[8];
            const v67 = {
                prop0: v38,
                prop1: v42,
                prop2: v45,
                prop3: v61,
                prop4: v66,
            };
            obj1.prop0 = v67;
        }
    }
    _array2iterate([[],[]]);
}
test0();
test0();
test0();
console.log("PASSED");
