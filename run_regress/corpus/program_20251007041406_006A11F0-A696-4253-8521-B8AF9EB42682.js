function f0() {
}
var BUGNUMBER = 465424;
var summary = "TM: issue with post-decrement operator";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "0,1,2,3,4,";
    for (let i16 = 0; i16 < 5; ++i16) {
        jj = i16;
        const v28 = ("" + jj--) + ",";
        actual += v28;
        f0(v28);
    }
    f0(expect, actual, summary);
}
