var obj = {};
function strictNestedAssignShadowCatch(a3) {
    'use strict';
    function inner() {
        try {
        } catch(e5) {
            function innermost() {
                e5 = 1776;
                return 12;
            }
            var f = innermost;
            try { f(); } catch (e) {}
        }
    }
    return arguments;
}
var a1;
var a2;
var a3;
var a4;
for (let i21 = 0; i21 < 5; i21++) {
    let v27;
    try { v27 = strictNestedAssignShadowCatch(); } catch (e) {}
    a1 = v27;
    let v29;
    try { v29 = strictNestedAssignShadowCatch(99); } catch (e) {}
    a2 = v29;
    let v31;
    try { v31 = strictNestedAssignShadowCatch(""); } catch (e) {}
    a3 = v31;
    let v32;
    try { v32 = strictNestedAssignShadowCatch(obj); } catch (e) {}
    a4 = v32;
}
const v33 = [];
try { arraysEqual(a1, v33); } catch (e) {}
const v38 = [99];
try { arraysEqual(a2, v38); } catch (e) {}
const v42 = [""];
try { arraysEqual(a3, v42); } catch (e) {}
const v45 = [obj];
try { arraysEqual(a4, v45); } catch (e) {}
