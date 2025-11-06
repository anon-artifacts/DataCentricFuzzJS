var obj = {};
var upper;
function strictAssignAfter(a5) {
    'use strict';
    upper = arguments;
    a5 = 42;
    return upper;
}
var a1;
var a2;
var a3;
for (let i15 = 0; i15 < 5; i15++) {
    let v21;
    try { v21 = strictAssignAfter(); } catch (e) {}
    a1 = v21;
    let v23;
    try { v23 = strictAssignAfter(17); } catch (e) {}
    a2 = v23;
    let v24;
    try { v24 = strictAssignAfter(obj); } catch (e) {}
    a3 = v24;
}
const v25 = [];
try { arraysEqual(a1, v25); } catch (e) {}
const v30 = [17];
try { arraysEqual(a2, v30); } catch (e) {}
const v33 = [obj];
try { arraysEqual(a3, v33); } catch (e) {}
