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
    function f(a15) {
        actual = "";
        var g;
        const v21 = typeof g + ",";
        actual += v21;
        f0(v21);
        if (a15) {
            function g() {
            }
        }
        actual += g;
        f0(g);
    }
    expect = "undefined,undefined";
    f(0);
    f0(expect, actual, summary + ": f(0): ");
    expect = "undefined,function g(){}";
    f(1);
    f0(expect, actual, summary + ": f(1): ");
}
