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
    function foo() {
        var x = 4;
        function f17() {
            return x++;
        }
        var f = f17;
        function f20() {
            return x++;
        }
        var g = f20;
        return [f,g];
    }
    var bar = foo();
    expect = "9";
    actual = 0;
    bar[0]();
    bar[1]();
    actual = String(expect);
    f0(expect, actual, summary);
}
