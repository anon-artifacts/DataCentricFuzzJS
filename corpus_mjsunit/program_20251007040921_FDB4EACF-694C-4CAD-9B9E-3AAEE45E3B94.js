var global = 0;
var MAX = 5;
function strictToBeInlined(a5) {
    'use strict';
    global = "strict";
    if (a5 == MAX) {
        undefined_variable_strict = "value";
    }
}
function nonstrictCallStrict(a11) {
    strictToBeInlined(a11);
}
function testInlineStrictInNonStrict() {
    for (let i15 = 0; i15 <= MAX; i15++) {
        try {
            nonstrictCallStrict(i15);
        } catch(e21) {
            return;
        }
    }
    fail("ReferenceError after MAX iterations", "no exception");
}
testInlineStrictInNonStrict();
function nonstrictToBeInlined(a29) {
    global = "nonstrict";
    if (a29 == MAX) {
        undefined_variable_nonstrict = "The nonstrict value";
    }
}
function strictCallNonStrict(a35) {
    'use strict';
    nonstrictToBeInlined(a35);
}
function testInlineNonStrictInStrict() {
    for (let i39 = 0; i39 <= MAX; i39++) {
        try {
            strictCallNonStrict(i39);
        } catch(e45) {
            fail("no exception", "exception");
        }
    }
}
testInlineNonStrictInStrict();
function strictAssignToUndefined(a54) {
    'use strict';
    global = "strict";
    if (a54 == MAX) {
        undefined_variable_strict_2 = "value";
    }
}
function testOptimizeStrictAssignToUndefined() {
    for (let i61 = 0; i61 <= MAX; i61++) {
        try {
            strictAssignToUndefined(i61);
        } catch(e67) {
            return;
        }
    }
    fail("ReferenceError after MAX iterations", "no exception");
}
testOptimizeStrictAssignToUndefined();
