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
    if (typeof timeout == "function") {
        expectExitCode(6);
        while ((() => {
                function f21() {
                }
                return f21;
            })()) {
        }
    }
    f0(expect, actual, summary);
}
