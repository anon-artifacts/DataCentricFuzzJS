var gTestfile = "this-for-function-expression-recursion.js";
var BUGNUMBER = 611276;
var summary = "JSOP_CALLEE should push undefined, not null, for this";
print((BUGNUMBER + ": ") + summary);
function calleeThisFun(a12) {
    if (a12) {
        return this;
    }
    return calleeThisFun(true);
}
var calleeThisFun = calleeThisFun;
calleeThisFun(false);
function calleeThisStrictFun(a22) {
    'use strict';
    if (a22) {
        return this;
    }
    return calleeThisStrictFun(true);
}
var calleeThisStrictFun = calleeThisStrictFun;
calleeThisStrictFun(false);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
