function f0() {
}
var BUGNUMBER = 385393;
var summary = "Regression test for bug 385393";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
try {
    this.__proto__ = [];
    ([1,2,3,4]).map.call();
} catch(e20) {
}
f0(expect, actual, summary);
