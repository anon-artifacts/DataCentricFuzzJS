function f0() {
}
var BUGNUMBER = 352742;
var summary = "Array filter on {valueOf: Function}";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0("If the test harness fails, this test fails.");
    expect = 4;
    z = { valueOf: Function };
    actual = 2;
    try {
        ([11]).filter(z);
    } catch(e25) {
        actual = 3;
    }
    actual = 4;
    f0(expect, actual, summary);
}
