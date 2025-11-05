function f0() {
}
var BUGNUMBER = 467495;
var summary = "TCF_FUN_CLOSURE_VS_VAR is necessary";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function g() {
        if (1) {
            function x() {
            }
        }
        var x;
        const y = 1;
    }
    try {
        g();
    } catch(e22) {
        actual = e22 + "";
    }
    f0(expect, actual, summary);
}
