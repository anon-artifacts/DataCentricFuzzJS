function f0() {
}
var BUGNUMBER = 466262;
var summary = "Do not assert: f == f->root";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var e = 1;
    for (let i17 = 0; i17 < 3; ++i17) {
        if (i17 == 2) {
            e = "";
        }
    }
    f0(expect, actual, summary);
}
