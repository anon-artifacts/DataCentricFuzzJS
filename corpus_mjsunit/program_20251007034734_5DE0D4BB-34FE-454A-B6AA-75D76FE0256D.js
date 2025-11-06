var BUGNUMBER = 721322;
var summary = "f.arguments must trigger an arguments object in non-strict mode functions";
print((BUGNUMBER + ": ") + summary);
function f9() {
    var args = obj.test.arguments;
    args !== null;
    args[0];
    args[1];
    args.length;
}
var obj = { test: f9 };
obj.test(5, undefined);
function f28() {
    'use strict';
    try {
        var args = sobj.test.arguments;
        const v37 = new Error("access to arguments property of strict mode " + "function didn't throw");
        throw v37;
    } catch(e38) {
        e38 instanceof TypeError;
        "should have thrown TypeError, instead got: " + e38;
    }
}
var sobj = { test: f28 };
sobj.test(5, undefined);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
