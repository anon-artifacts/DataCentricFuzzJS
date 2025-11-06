function f0() {
}
var BUGNUMBER = 452724;
var summary = "Do not crash with JIT: @TraceRecorder::getThis";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 5; ++i15) {
        (0 / 0) in this;
    }
    f0(expect, actual, summary);
}
