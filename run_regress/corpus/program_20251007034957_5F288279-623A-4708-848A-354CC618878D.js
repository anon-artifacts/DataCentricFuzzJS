function f0() {
}
var BUGNUMBER = 349592;
var summary = "Do not assert with try/finally inside finally";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        try {
        } finally {
            try {
            } finally {
            }
        }
    }
    f0(expect, actual, summary);
}
