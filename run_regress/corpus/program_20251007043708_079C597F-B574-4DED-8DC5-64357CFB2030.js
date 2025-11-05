function f0() {
}
var BUGNUMBER = 452498;
var summary = "TM: upvar2 regression tests";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function p() {
        p = 3;
    }
    function p() {
        p = 3;
        return p;
    }
    p();
    f0(expect, actual, summary);
}
