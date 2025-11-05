function f0() {
}
var BUGNUMBER = 457778;
var summary = "Do not assert with JIT: cond->isCond()";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 4; ++i15) {
        if (undefined < false) {
        }
    }
    f0(expect, actual, summary);
}
