function f0() {
}
var BUGNUMBER = 438415;
var summary = "Do not assert: *vp != JSVAL_HOLE";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    ([1,,]).pop();
    f0(expect, actual, summary);
}
