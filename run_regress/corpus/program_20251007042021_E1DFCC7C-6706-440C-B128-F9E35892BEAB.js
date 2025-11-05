var gTestfile = "for-of-var-with-initializer.js";
var BUGNUMBER = 1164741;
var summary = "Don't assert parsing |for (var x = 3 of 42);|";
print((BUGNUMBER + ": ") + summary);
try {
    Function("for (var x = 3 of 42);");
    const v16 = new Error("didn't throw");
    throw v16;
} catch(e17) {
    e17 instanceof SyntaxError;
    "expected syntax error, got: " + e17;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
