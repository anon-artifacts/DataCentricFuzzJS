function f0() {
}
var BUGNUMBER = 456494;
var summary = "Do not crash with apply and argc > nargs";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function k(a15) {
    }
    function f() {
        for (i = 0; i < 10; i++) {
            k.apply(this, arguments);
        }
    }
    f(1);
    f0(expect, actual, summary);
}
