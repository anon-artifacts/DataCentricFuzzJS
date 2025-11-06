function f0() {
}
var BUGNUMBER = 294195;
var summary = "Do not crash during String replace when accessing methods on backreferences";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
var result = ("").replace(/()/, ("$1").slice(0, 1));
f0(expect, actual, summary);
