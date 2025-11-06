function f0() {
}
var BUGNUMBER = 452178;
var summary = "Do not assert with JIT: !(sprop->attrs & JSPROP_SHARED)";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f16() {
    }
    Object.defineProperty(this, "q", { get: f16, enumerable: true, configurable: true });
    for (let i23 = 0; i23 < 4; ++i23) {
        q = 1;
    }
    f0(expect, actual, summary);
}
