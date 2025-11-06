function f0() {
}
var BUGNUMBER = 459990;
var summary = "Do not crash with if (true && a && b) { }";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        if ((true && a) && b) {
        }
    } catch(e19) {
    }
    f0(expect, actual, summary);
}
