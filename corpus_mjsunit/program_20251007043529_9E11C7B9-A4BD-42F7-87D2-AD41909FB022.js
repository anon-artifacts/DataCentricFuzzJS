function f0() {
}
var BUGNUMBER = 465460;
var summary = "TM: valueOf in a loop";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "11111";
    function f15() {
        return 1;
    }
    const v17 = { valueOf: f15 };
    function f18(a19) {
        for (let i21 = 0; i21 < 5; ++i21) {
            actual += "" + a19;
        }
    }
    f18(v17);
    f0(expect, actual, summary);
}
