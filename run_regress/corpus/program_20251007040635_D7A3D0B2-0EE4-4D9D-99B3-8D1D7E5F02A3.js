function f0() {
}
var BUGNUMBER = 479381;
var summary = "Do not crash @ js_FinalizeStringRT with multi-threads.";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if ((typeof gczeal != "function") || (typeof scatter != "function")) {
        actual = "Test skipped: requires mulithreads";
        expect = "Test skipped: requires mulithreads";
        f0("Test skipped: requires mulithreads");
    } else {
        actual = "No Crash";
        expect = "No Crash";
        gczeal(2);
        function f() {
            var s;
            for (let i32 = 0; i32 < 9999; i32++) {
                s = ("a" + String(i32)[3]) + "b";
            }
            return s;
        }
        f0(scatter([f,f,f,f]));
        gczeal(0);
    }
    f0(expect, actual, summary);
}
