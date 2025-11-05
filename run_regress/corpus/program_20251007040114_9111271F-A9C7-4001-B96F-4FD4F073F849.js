function f0() {
}
var BUGNUMBER = 452333;
var summary = "Do not crash with JIT: @ js_SkipWhiteSpace";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        for (let i16 = 0; i16 < 5; ++i16) {
            typeof 3 / 0;
        }
    }
    f14();
    f0(expect, actual, summary);
}
