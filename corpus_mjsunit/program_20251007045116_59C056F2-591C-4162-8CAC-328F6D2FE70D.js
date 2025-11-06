function f0() {
}
var BUGNUMBER = 365869;
var summary = "strict warning for object literal with duplicate propery names";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0("test crash from bug 371292 Comment 9");
    try {
        expect = "TypeError: can't redefine non-configurable property 5";
        function f18() {
        }
        ("012345").__defineSetter__(5, f18);
    } catch(e21) {
        actual = e21 + "";
    }
    f0(expect, actual, summary);
}
