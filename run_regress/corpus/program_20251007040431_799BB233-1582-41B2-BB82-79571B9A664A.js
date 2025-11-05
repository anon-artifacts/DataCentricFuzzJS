var __counter = 0;
function test0() {
    __counter++;
    var obj0 = {};
    var arrObj0 = {};
    function f8() {
    }
    var func0 = f8;
    function f10() {
    }
    var func1 = f10;
    function f12() {
        for (;
            (() => {
                const v19 = ui16?.[218361093] >= 0 ? ui16?.[218361093] : 0;
                let v20;
                try { v20 = func1(v19); } catch (e) {}
                return v20;
            })();
            (() => {
                const v23 = false ? arrObj0 : undefined;
                try { func1(v23); } catch (e) {}
            })()) {
        }
    }
    var func2 = f12;
    obj0.method1 = func0;
    arrObj0.method1 = func2;
    let v27;
    try { v27 = new Uint16Array(); } catch (e) {}
    var ui16 = v27;
    var uniqobj1 = [obj0,arrObj0];
    var uniqobj2 = uniqobj1?.[__counter % uniqobj1?.length];
    try { uniqobj2.method1(); } catch (e) {}
    for (const v36 of ui16) {
    }
}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { WScript.Echo("Passed"); } catch (e) {}
