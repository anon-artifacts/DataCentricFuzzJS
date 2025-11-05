function f0() {
}
var BUGNUMBER = 23346;
var CALL_CALLED = "PASSED";
test();
function f(a8) {
    if (a8) {
        return call();
    }
    return "FAILED!";
}
function call() {
    return CALL_CALLED;
}
function test() {
    f0("ECMA Section: 10.1.3: Variable Instantiation.");
    f0(BUGNUMBER);
    f0("PASSED", f(true), "Unqualified reference should not see Function.prototype");
}
