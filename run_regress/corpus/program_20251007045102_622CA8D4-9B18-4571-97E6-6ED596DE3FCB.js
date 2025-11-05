function f0() {
}
var BUGNUMBER = 467495;
var summary = "Do not crash @ js_Interpret";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        x = 0;
        function x() {
            return 4;
        }
        var x;
        const y = 1;
    }
    f14();
    f0(expect, actual, summary);
}
