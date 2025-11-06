function f0() {
}
var GiantPrintArray = [];
function test0() {
    var obj0 = {};
    var a = 1;
    var d = 1;
    function func7(a11) {
        function f12() {
            'use strict';
            var v3291 = "I am global";
            var res;
            try {
                throw "I am not global";
            } catch(e18) {
                function foo() {
                    return e18;
                }
                let v20;
                try { v20 = foo(); } catch (e) {}
                res = v20;
                const v21 = obj0?.length;
                function f22(a23) {
                    a11 = --a23;
                }
                try { f22(v21); } catch (e) {}
                let v26;
                try { v26 = foo(); } catch (e) {}
                res = v26;
            }
            try { GiantPrintArray.push(res); } catch (e) {}
        }
        try { f12(); } catch (e) {}
        function __objtypespecfoobar() {
            obj0.v3293 = a11;
            for (const v30 in obj0) {
                const v34 = (v30 + ":") + obj0?.[obj0];
                try { GiantPrintArray.push(v34); } catch (e) {}
            }
        }
        try { __objtypespecfoobar(); } catch (e) {}
        try { __objtypespecfoobar(); } catch (e) {}
    }
    obj0[_strvar0] = 1;
    var __loopvar4 = 0;
    for (const v42 in obj0) {
        let v44;
        try { v44 = v42.indexOf("method"); } catch (e) {}
        if (v44 != -1) {
            continue;
        }
        if (__loopvar4++ > 3) {
            break;
        }
        const v51 = --a;
        let v52;
        try { v52 = func7(v51); } catch (e) {}
        obj0[v42] = v52;
    }
    for (let i54 = 0; i54 < GiantPrintArray?.length; i54++) {
        const v60 = GiantPrintArray?.[GiantPrintArray];
        try { f0(v60); } catch (e) {}
    }
}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
