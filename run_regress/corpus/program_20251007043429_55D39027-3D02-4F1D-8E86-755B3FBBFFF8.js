function f0() {
}
var BUGNUMBER = 452853;
var summary = "Do not crash in simple loop with array";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 4; ++i15) {
        var a = ["",""];
        a[0] * a[1];
    }
    f0(expect, actual, summary);
}
