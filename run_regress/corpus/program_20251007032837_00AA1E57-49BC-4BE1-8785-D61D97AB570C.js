function f0() {
}
var BUGNUMBER = 366396;
var summary = "Do not assert !SPROP_HAS_STUB_GETTER on Setter with %=";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function f12() {
}
this.__defineSetter__("x", f12);
x %= 5;
f0(expect, actual, summary);
