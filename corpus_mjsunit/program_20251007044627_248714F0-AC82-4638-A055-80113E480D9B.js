function f0() {
}
var BUGNUMBER = 417817;
var summary = "Do not assert: ASSERT_VALID_PROPERTY_CACHE_HIT";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
const numThreads = 2;
const numPasses = 1000;
function first(a16) {
    f0("Hello, World!");
}
var tests = { 0: first, length: 1 };
function runAllTests() {
    var passes;
    var i;
    for ((() => {
            passes = 0;
        })();
        passes < numPasses;
        passes++) {
        for ((() => {
                i = 0;
            })();
            i < tests.length;
            i++) {
            tests[0]();
        }
    }
}
if (typeof scatter == "undefined") {
    actual = "Test skipped. Requires scatter.";
    expect = "Test skipped. Requires scatter.";
    f0("Test skipped. Requires scatter.");
} else {
    var i;
    var a = [];
    for ((() => {
            i = 0;
        })();
        i < numThreads;
        i++) {
        a.push(runAllTests);
    }
    scatter(a);
}
f0(expect, actual, summary);
