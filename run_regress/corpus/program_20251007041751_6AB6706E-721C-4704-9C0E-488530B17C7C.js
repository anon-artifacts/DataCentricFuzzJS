function f0() {
}
var BUGNUMBER = 465272;
var summary = "subtraction";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "3,3,3,3,3,";
    for (j = 0; j < 5; ++j) {
        const v28 = ("" + (5 - 2)) + ",";
        actual += v28;
        f0(v28);
    }
    f0(expect, actual, summary);
}
