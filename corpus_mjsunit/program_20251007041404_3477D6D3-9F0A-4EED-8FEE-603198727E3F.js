function f0() {
}
var BUGNUMBER = 479252;
var summary = "Avoid watchdog ticks when idle in shell";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (((typeof sleep != "function") || (typeof scatter != "function")) || (typeof timeout != "function")) {
        actual = "Test skipped: requires mulithreads and timeout.";
        expect = "Test skipped: requires mulithreads and timeout.";
        f0("Test skipped: requires mulithreads and timeout.");
    } else {
        expectExitCode(6);
        function f() {
            sleep(100);
        }
        scatter([f,f,f,f,f]);
    }
    f0(expect, actual, summary);
}
