function f0() {
}
var BUGNUMBER = 426711;
var summary = "Setting window.__count__ causes a crash";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if ((typeof window != "undefined") && ("__count__" in window)) {
        window.__count__ = 0;
    } else {
        actual = "Test skipped. Requires window.__count__";
        expect = "Test skipped. Requires window.__count__";
    }
    f0(expect, actual, summary);
}
