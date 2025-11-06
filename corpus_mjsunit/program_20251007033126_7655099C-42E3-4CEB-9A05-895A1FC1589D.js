function f0() {
}
var BUGNUMBER = 452573;
var summary = "Do not assert with JIT: boxed.isUndefined() || boxed.isBoolean()";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 5; ++i15) {
        typeof (void / x /);
    }
    f0(expect, actual, summary);
}
