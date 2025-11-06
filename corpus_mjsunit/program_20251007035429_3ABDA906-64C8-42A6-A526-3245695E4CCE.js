function f0() {
}
var BUGNUMBER = 350837;
var summary = "clear cx->throwing in finally";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "F";
    function f() {
        actual = "F";
    }
    try {
        try {
            throw 1;
        } finally {
            f.call(this);
        }
    } catch(e20) {
        f0(1, e20, summary);
    }
    f0(expect, actual, summary);
}
