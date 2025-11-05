var obj = {};
function strictNestedAssignShadowFunctionCall(a3) {
    'use strict';
    function inner() {
        function p() {
        }
        p = 1776;
    }
    try { inner(); } catch (e) {}
    return arguments;
}
var a1;
var a2;
var a3;
var a4;
for (let i18 = 0; i18 < 5; i18++) {
    let v24;
    try { v24 = strictNestedAssignShadowFunctionCall(); } catch (e) {}
    a1 = v24;
    let v26;
    try { v26 = strictNestedAssignShadowFunctionCall(99); } catch (e) {}
    a2 = v26;
    let v28;
    try { v28 = strictNestedAssignShadowFunctionCall(""); } catch (e) {}
    a3 = v28;
    let v29;
    try { v29 = strictNestedAssignShadowFunctionCall(obj); } catch (e) {}
    a4 = v29;
}
const v30 = [];
try { arraysEqual(a1, v30); } catch (e) {}
const v35 = [99];
try { arraysEqual(a2, v35); } catch (e) {}
const v39 = [""];
try { arraysEqual(a3, v39); } catch (e) {}
const v42 = [obj];
try { arraysEqual(a4, v42); } catch (e) {}
