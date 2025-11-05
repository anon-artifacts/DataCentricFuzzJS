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
    function f14(a15) {
        function b() {
        }
        function a() {
        }
    }
    f14();
    f0(expect, actual, summary);
}
