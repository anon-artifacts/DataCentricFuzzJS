var BUGNUMBER = 1160356;
var summary = "Date.UTC must convert *all* arguments to number, not return NaN early if " + "a non-finite argument is encountered";
print((BUGNUMBER + ": ") + summary);
function expectThrowTypeError(a12, a13) {
    try {
        a12();
        const v17 = new Error("didn't throw");
        throw v17;
    } catch(e18) {
        (("index " + a13) + ": expected 42, got ") + e18;
    }
}
function f25() {
    throw 17;
}
function f27() {
    throw 42;
}
var bad = { toString: f25, valueOf: f27 };
var args = [[bad],[NaN,bad],[Infinity,bad],[1970,bad],[1970,NaN,bad],[1970,Infinity,bad],[1970,4,bad],[1970,4,NaN,bad],[1970,4,Infinity,bad],[1970,4,17,bad],[1970,4,17,NaN,bad],[1970,4,17,Infinity,bad],[1970,4,17,13,bad],[1970,4,17,13,NaN,bad],[1970,4,17,13,Infinity,bad],[1970,4,17,13,37,bad],[1970,4,17,13,37,NaN,bad],[1970,4,17,13,37,Infinity,bad],[1970,4,17,13,37,23,bad]];
for (let i107 = 0, i108 = args.length; i107 < i108; i107++) {
    function f115() {
        const v117 = args[i107];
        Date.UTC.apply(null, v117);
    }
    expectThrowTypeError(f115, i107);
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
