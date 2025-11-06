function f0() {
}
var BUGNUMBER = 452346;
var summary = "Do not crash: @ Balloc";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 2; ++i15) {
        (0.1).toPrecision(30);
    }
    f0(expect, actual, summary);
}
