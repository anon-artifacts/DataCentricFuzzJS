function f0() {
}
var BUGNUMBER = 469234;
var summary = "TM: Do not assert: !JS_ON_TRACE(cx)";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 3; ++i15) {
        function f22() {
        }
        const v23 = [];
        ({ __proto__: v23 }).__defineSetter__("x", f22);
    }
    f0(expect, actual, summary);
}
