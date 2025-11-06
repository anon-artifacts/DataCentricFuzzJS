function f0() {
}
var BUGNUMBER = 479430;
var summary = "Missing operation callback checks";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof timeout == "function") {
        expectExitCode(6);
        function f(a22) {
            if (a22 != 0) {
                try {
                    f(a22 - 1);
                } catch(e28) {
                }
                try {
                    f(a22 - 1);
                } catch(e32) {
                }
            }
        }
        f(100);
    }
    f0(expect, actual, summary);
}
