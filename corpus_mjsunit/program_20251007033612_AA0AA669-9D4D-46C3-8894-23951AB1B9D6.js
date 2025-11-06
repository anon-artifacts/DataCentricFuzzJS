function f0() {
}
var BUGNUMBER = 458076;
var summary = "Do not assert with JIT: !lhs->isQuad() && !rhs->isQuad()";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 3; ++i15) {
        true == 0;
    }
    f0(expect, actual, summary);
}
