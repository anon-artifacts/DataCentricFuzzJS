function f0() {
}
var BUGNUMBER = 295052;
var summary = "Do not crash when apply method is called on String.prototype.match";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
try {
    ("").match.apply();
    const v16 = new Error("should have thrown for undefined this");
    throw v16;
} catch(e17) {
    e17 instanceof TypeError;
}
f0(expect, actual, summary);
