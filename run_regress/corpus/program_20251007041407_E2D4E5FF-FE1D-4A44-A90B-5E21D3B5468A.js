function f0() {
}
var BUGNUMBER = 349482;
var summary = "Decompiling try/catch in with() should not crash";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        with ({}) {
            try {
            } catch(e16) {
            }
        }
    }
    var f = f14;
    f0(f.toString());
    f0(expect, actual, summary);
}
