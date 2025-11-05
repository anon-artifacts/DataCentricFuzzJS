function f0() {
}
var BUGNUMBER = 398609;
var summary = "Test regression from bug 398609";
var actual = "No Error";
var expect = "No Error";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f(a15) {
        a15 = a15 || Math;
        return x();
        function x() {
            return a15.sin(0);
        }
    }
    var r = f();
    if (r !== Math.sin(0)) {
        throw "Unexpected result";
    }
    f0(expect, actual, summary);
}
