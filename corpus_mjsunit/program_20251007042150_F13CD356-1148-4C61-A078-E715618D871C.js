function f0() {
}
var BUGNUMBER = 300079;
var summary = "precompiled functions should inherit from current window's Function.prototype";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof clone == "undefined") {
        expect = "SKIPPED";
        actual = "SKIPPED";
    } else {
        expect = "PASSED";
        f = evaluate("(function () { return a * a; })");
        g = clone(f, { a: 3 });
        f = null;
        gc();
        try {
            a_squared = g(2);
            if (a_squared != 9) {
                throw "Unexpected return from g: a_squared == " + a_squared;
            }
            actual = "PASSED";
        } catch(e43) {
            actual = "FAILED: " + e43;
        }
    }
    f0(expect, actual, summary);
}
