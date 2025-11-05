function f0() {
}
var BUGNUMBER = 465135;
var summary = "true << true";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "2,2,2,2,2,";
    actual = "";
    for (let i17 = 0; i17 < 5; ++i17) {
        actual += (true << true) + ",";
    }
    f0(expect, actual, summary);
}
