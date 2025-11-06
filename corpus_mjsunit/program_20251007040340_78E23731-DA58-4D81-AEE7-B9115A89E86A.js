function f0() {
}
var BUGNUMBER = 477187;
var summary = "timeout script";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if ((typeof window != "undefined") || (typeof timeout != "function")) {
        actual = "Test skipped due to lack of timeout function";
        expect = "Test skipped due to lack of timeout function";
        f0("Test skipped due to lack of timeout function");
        f0(expect, actual, summary);
    } else {
        expectExitCode(6);
        f0(expect, actual, summary);
        while (1) {
        }
    }
}
