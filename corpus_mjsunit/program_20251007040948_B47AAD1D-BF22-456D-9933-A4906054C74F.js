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
    expect = "1";
    function g(a16) {
        if (1) {
            function x() {
            }
        }
        return a16;
    }
    const v22 = g(1) + "";
    actual = v22;
    f0(v22);
    f0(expect, actual, summary);
}
