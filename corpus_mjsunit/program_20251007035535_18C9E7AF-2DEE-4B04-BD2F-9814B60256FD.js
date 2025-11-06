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
    for (let i15 = 0; i15 < 2; ++i15) {
        for (let i22 = 0; i22 < 1; ++i22) {
            function f29() {
            }
            "" + (i15 && f29);
        }
    }
    f0(expect, actual, summary);
}
