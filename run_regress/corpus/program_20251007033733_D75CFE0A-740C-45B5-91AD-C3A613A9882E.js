function f0() {
}
DESCRIPTION = "Illegally constructed catchguard should have thrown an exception.";
var expect;
var actual;
test();
function test() {
    var EXCEPTION_DATA = "String exception";
    var e;
    f0("Catchguard syntax negative test #2.");
    try {
        throw EXCEPTION_DATA;
    } catch(e16) {
        actual = e16 + ": 1";
    }
    f0(expect, actual, DESCRIPTION);
}
