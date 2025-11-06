function f0() {
}
var BUGNUMBER = 416354;
var summary = "GC hazard due to missing SAVE_SP_AND_PC";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f(a15, a16, a17) {
        return -a15 * (-a16 * -a17);
    }
    if (typeof gczeal == "function") {
        expect = f(1.5, 1.25, 1.125);
        gczeal(2);
        actual = f(1.5, 1.25, 1.125);
    } else {
        actual = "Test requires gczeal, skipped.";
        expect = "Test requires gczeal, skipped.";
    }
    if (typeof gczeal == "function") {
        gczeal(0);
    }
    f0(expect, actual, summary);
}
