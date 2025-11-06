function f0() {
}
var BUGNUMBER = 243869;
var summary = "Rethrown custom Errors should retain file and line number";
var actual = "";
var expect = "Test Location:123";
f0(BUGNUMBER);
f0(summary);
function bar() {
    try {
        const v16 = new Error("Test Error", "Test Location", 123);
        var f = v16;
        throw f;
    } catch(e18) {
        throw e18;
    }
}
try {
    bar();
} catch(e20) {
    actual = (e20.fileName + ":") + e20.lineNumber;
}
f0(expect, actual, summary);
