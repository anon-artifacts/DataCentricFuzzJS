function f0() {
}
var BUGNUMBER = 355075;
var summary = "Regression tests from bug 354750";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0("strict");
    f0("werror");
    function f() {
        this.a = { 1: "a", 2: "b" };
        var dummy;
        for (const v27 in this.a) {
            dummy = v27;
        }
    }
    f();
    f0(expect, actual, summary);
}
