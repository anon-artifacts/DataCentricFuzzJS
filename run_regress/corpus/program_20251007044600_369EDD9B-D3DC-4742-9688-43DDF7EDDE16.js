function f0() {
}
var BUGNUMBER = 459405;
var summary = "Math is not ReadOnly";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "foo";
    try {
        var Math = "foo";
        actual = Math;
    } catch(e17) {
        actual = e17 + "";
    }
    f0(expect, actual, summary);
}
