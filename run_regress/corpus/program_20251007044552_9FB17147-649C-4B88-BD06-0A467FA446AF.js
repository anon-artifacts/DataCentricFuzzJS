var shouldBailout = false;
function test0() {
    var loopInvariant = shouldBailout ? 12 : 8;
    var GiantPrintArray = [];
    var protoObj0 = {};
    var obj1 = {};
    var protoObj1 = {};
    function f15() {
    }
    var func4 = f15;
    for (let i17 = loopInvariant; i17 != (loopInvariant + 4);) {
        var __loopvar1 = loopInvariant;
        for (let i24 = loopInvariant;;) {
            while (obj1?.prop0) {
                var __loopvar3 = loopInvariant;
                do {
                    var v0 = protoObj1?.[{}];
                    protoObj1 = protoObj0;
                    var uniqobj1 = [obj1];
                    try { GiantPrintArray.push(i17); } catch (e) {}
                    try { func4(); } catch (e) {}
                    if (__loopvar3 > (loopInvariant + 6)) {
                    }
                    __loopvar3 += 2;
                } while (protoObj0)
                const v43 = "arrObj0.prop0 = " + arrObj0;
                try { GiantPrintArray(v43); } catch (e) {}
                const v46 = "protoObj1.prop0 = " + protoObj0;
                try { GiantPrintArray(v46); } catch (e) {}
            }
            if (__loopvar1 === loopInvariant) {
                break;
            }
            __loopvar1++;
        }
        i17++;
    }
}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { WScript.Echo("pass"); } catch (e) {}
