var gTestfile = "function-caller.js";
var BUGNUMBER = 514581;
var summary = "Function.prototype.caller should throw a TypeError for " + "strict-mode functions";
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
}
function barCaller() {
    bar.caller;
}
expectTypeError(barCaller);
function baz() {
    'use strict';
    return 17;
}
function bazCaller() {
    baz.caller;
}
expectTypeError(bazCaller);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
