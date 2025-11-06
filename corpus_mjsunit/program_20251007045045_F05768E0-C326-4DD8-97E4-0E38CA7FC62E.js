function f0() {
}
var BUGNUMBER = 456470;
var summary = "TM: Make sure JSOP_DEFLOCALFUN pushes the right function object.";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function x() {
        function a() {
            return true;
        }
        return a();
    }
    for (let i19 = 0; i19 < 10; ++i19) {
        x();
    }
    f0(expect, actual, summary);
}
