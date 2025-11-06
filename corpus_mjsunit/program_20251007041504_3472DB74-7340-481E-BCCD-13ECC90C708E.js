function f0() {
}
var BUGNUMBER = 459085;
var summary = "Do not assert with JIT: Should not move data from GPR to XMM";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v16 = new Number(3);
    var m = v16;
    function foo() {
        for (let i20 = 0; i20 < 20; i20++) {
            m.toString();
        }
    }
    foo();
    f0(expect, actual, summary);
}
