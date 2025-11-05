function f0() {
}
var BUGNUMBER = 452960;
var summary = "Do not assert with JIT: !v.isPrimitive()";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
    }
    var f = f14;
    f.prototype = false;
    for (let i18 = 0; i18 < 5; ++i18) {
        new f();
    }
    f0(expect, actual, summary);
}
