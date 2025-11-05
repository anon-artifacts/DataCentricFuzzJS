function f0() {
}
DESCRIPTION = "var in catch clause should have caused an error.";
var expect;
var actual;
test();
function test() {
    var EXCEPTION_DATA = "String exception";
    var e;
    f0("Catchguard var declaration negative test.");
    try {
        throw EXCEPTION_DATA;
    } catch(e16) {
        actual = e16 + "";
    }
    f0(expect, actual, DESCRIPTION);
}
