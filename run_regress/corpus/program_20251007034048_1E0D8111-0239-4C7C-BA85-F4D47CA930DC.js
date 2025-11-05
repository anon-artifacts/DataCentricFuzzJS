var obj = {};
function strictMaybeAssignOuterParam(a3) {
    'use strict';
    function inner() {
        a3 = 17;
    }
    return arguments;
}
var a1;
var a2;
var a3;
for (let i14 = 0; i14 < 5; i14++) {
    let v20;
    try { v20 = strictMaybeAssignOuterParam(); } catch (e) {}
    a1 = v20;
    let v22;
    try { v22 = strictMaybeAssignOuterParam(17); } catch (e) {}
    a2 = v22;
    let v23;
    try { v23 = strictMaybeAssignOuterParam(obj); } catch (e) {}
    a3 = v23;
}
const v24 = [];
try { arraysEqual(a1, v24); } catch (e) {}
const v29 = [17];
try { arraysEqual(a2, v29); } catch (e) {}
const v32 = [obj];
try { arraysEqual(a3, v32); } catch (e) {}
