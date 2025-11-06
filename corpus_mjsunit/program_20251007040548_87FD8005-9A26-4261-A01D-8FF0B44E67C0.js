function f0() {
}
var BUGNUMBER = 385393;
var summary = "Regression test for bug 385393";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        ("a").replace(/a/g, eval);
    } catch(e18) {
    }
    f0(expect, actual, summary);
}
