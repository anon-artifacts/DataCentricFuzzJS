var gTestfile = "arrow-function-in-for-statement-head.js";
var BUGNUMBER = 1163851;
var summary = "|for (x => 0 in 1;;) break;| must be a syntax error per ES6, not an " + "elaborate nop";
print((BUGNUMBER + ": ") + summary);
try {
    Function("for (x => 0 in 1;;) break;");
    const v18 = new Error("didn't throw");
    throw v18;
} catch(e19) {
    e19 instanceof SyntaxError;
    "expected syntax error, got " + e19;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
