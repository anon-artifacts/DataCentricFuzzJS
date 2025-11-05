var obj = {};
function strictNestedAssignShadowFunction(a3) {
    'use strict';
    function inner() {
        function p() {
        }
        p = 1776;
    }
    return arguments;
}
var a1;
var a2;
var a3;
var a4;
for (let i17 = 0; i17 < 5; i17++) {
    let v23;
    try { v23 = strictNestedAssignShadowFunction(); } catch (e) {}
    a1 = v23;
    let v25;
    try { v25 = strictNestedAssignShadowFunction(99); } catch (e) {}
    a2 = v25;
    let v27;
    try { v27 = strictNestedAssignShadowFunction(""); } catch (e) {}
    a3 = v27;
    let v28;
    try { v28 = strictNestedAssignShadowFunction(obj); } catch (e) {}
    a4 = v28;
}
const v29 = [];
try { arraysEqual(a1, v29); } catch (e) {}
const v34 = [99];
try { arraysEqual(a2, v34); } catch (e) {}
const v38 = [""];
try { arraysEqual(a3, v38); } catch (e) {}
const v41 = [obj];
try { arraysEqual(a4, v41); } catch (e) {}
