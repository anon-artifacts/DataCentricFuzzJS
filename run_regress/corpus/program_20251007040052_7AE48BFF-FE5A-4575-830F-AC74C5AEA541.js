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
    const v16 = new Function("const x = (function () { if (1e+81){} else{x} } )");
    v16();
    f0(expect, actual, summary);
}
