function strictAssignParameterGetElement(a1) {
    'use strict';
    a1 = 17;
    return arguments[0];
}
for (let i6 = 0; i6 < 5; i6++) {
    strictAssignParameterGetElement(42);
}
