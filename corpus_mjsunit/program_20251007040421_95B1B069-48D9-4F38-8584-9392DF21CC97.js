function f0() {
}
var BUGNUMBER = 260541;
var summary = "Recursive Error object should not crash";
var actual = "Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
const v13 = new Error("Error Text");
var myErr = v13;
myErr.name = myErr;
f0(expect, actual = "No Crash", summary);
