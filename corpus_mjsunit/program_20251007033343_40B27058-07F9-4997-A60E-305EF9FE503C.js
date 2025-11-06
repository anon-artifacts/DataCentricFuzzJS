var gTestfile = "arguments-caller-callee.js";
var BUGNUMBER = 514563;
var summary = "arguments.caller and arguments.callee are poison pills in ES5, " + "later changed in ES2017 to only poison pill arguments.callee.";
print((BUGNUMBER + ": ") + summary);
function expectTypeError(a14) {
    try {
        a14();
        const v18 = new Error("didn't throw");
        throw v18;
    } catch(e19) {
        e19 instanceof TypeError;
        (("expected TypeError calling function" + ("name" in a14 ? " " + a14.name : "")) + ", instead got: ") + e19;
    }
}
function bar() {
    'use strict';
    return arguments;
}
bar().caller;
function barCallee() {
    bar().callee;
}
expectTypeError(barCallee);
function baz() {
    return arguments;
}
baz().callee;
baz();
function strictMode() {
    'use strict';
    return arguments;
}
var canonicalTTE = Object.getOwnPropertyDescriptor(strictMode(), "callee").get;
var args = strictMode();
var argsCaller = Object.getOwnPropertyDescriptor(args, "caller");
var argsCallee = Object.getOwnPropertyDescriptor(args, "callee");
"get" in argsCallee;
"set" in argsCallee;
argsCallee.get;
argsCallee.set;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
