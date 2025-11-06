function f0() {
}
var BUGNUMBER = 453049;
var summary = "Do not assert with JIT: (*m != JSVAL_INT) || isInt32(*vp)";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var z = 0;
    for (let i17 = 0; i17 < 5; ++i17) {
        const v23 = -z;
        const v24 = { p: v23 };
    }
    f0(expect, actual, summary);
}
