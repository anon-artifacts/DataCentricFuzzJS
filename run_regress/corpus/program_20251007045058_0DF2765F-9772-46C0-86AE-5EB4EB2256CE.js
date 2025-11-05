function f0() {
}
var BUGNUMBER = 394967;
var summary = "Do not assert: !vp[1].isPrimitive()";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof evalcx == "undefined") {
        f0("Skipping. This test requires evalcx.");
    } else {
        var sandbox = evalcx("");
        try {
            evalcx("(1)()", sandbox);
        } catch(e25) {
        }
    }
    f0(expect, actual, summary);
}
