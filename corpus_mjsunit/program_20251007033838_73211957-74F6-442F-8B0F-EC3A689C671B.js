function f0() {
}
var BUGNUMBER = 352606;
var summary = "Do not crash involving post decrement";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    y = { toString: gc };
    const v19 = new Function("y--;");
    v19();
    f0(expect, actual, summary);
}
