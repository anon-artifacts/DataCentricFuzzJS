function f0() {
}
var BUGNUMBER = 351116;
var summary = "formal parameter and inner function have same name";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14(a15) {
        function s() {
        }
    }
    var f = f14;
    function g(a19) {
        function s() {
        }
    }
    f0(expect, actual, summary);
}
