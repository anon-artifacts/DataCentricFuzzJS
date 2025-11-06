function f0() {
}
var BUGNUMBER = 452724;
var summary = "Do not assert with JIT: (rmask(rr) & FpRegs) != 0";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        for (let i16 = 0; i16 < 5; ++i16) {
            (0 / 0) in this;
        }
    }
    f14();
    f0(expect, actual, summary);
}
