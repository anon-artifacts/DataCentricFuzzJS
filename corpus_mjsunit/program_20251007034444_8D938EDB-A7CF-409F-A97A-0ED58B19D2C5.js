function f0() {
}
var BUGNUMBER = 319384;
var summary = "Do not crash converting string to number";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
f0("This test only runs in the browser");
if (typeof clearTimeout === "function") {
    try {
        clearTimeout("foo");
    } catch(e19) {
    }
}
f0(expect, actual, summary);
