function f0() {
}
var BUGNUMBER = 472533;
var summary = "Do not crash with loop, replace, regexp";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 4; ++i15) {
        ("").replace("", /x/);
    }
    f0(expect, actual, summary);
}
