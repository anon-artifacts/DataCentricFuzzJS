var obj = {};
function strictAssignArgumentsElement(a3) {
    'use strict';
    arguments[0] = 42;
    return a3;
}
for (let i7 = 0; i7 < 5; i7++) {
    strictAssignArgumentsElement();
    strictAssignArgumentsElement(obj);
    strictAssignArgumentsElement(17);
}
