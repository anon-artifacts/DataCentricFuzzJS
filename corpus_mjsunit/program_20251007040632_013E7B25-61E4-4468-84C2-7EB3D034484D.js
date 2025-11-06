function f0() {
}
var BUGNUMBER = 123371;
var summary = "Do not crash when newline separates function name from arglist";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
f0("function call succeeded");
f0(expect, actual, summary);
