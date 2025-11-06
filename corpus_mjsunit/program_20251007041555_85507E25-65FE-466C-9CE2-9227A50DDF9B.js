function f0() {
}
var BUGNUMBER = 417893;
var summary = "Fast natives must use JS_THIS/JS_THIS_OBJECT";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        function f14() {
            function f15() {
            }
            var s = f15.prototype.toSource;
            s();
        }
        f14();
    } catch(e21) {
        e21 instanceof TypeError;
    }
    f0(expect, actual, summary);
}
