function f0() {
}
var BUGNUMBER = 465460;
var summary = "TM: valueOf in a loop: do not assert";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 3; ++i15) {
        1 & Date;
    }
    f0(expect, actual, summary);
}
