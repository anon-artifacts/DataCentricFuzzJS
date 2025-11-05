function f0() {
}
var BUGNUMBER = 348810;
var summary = "Do not crash when sorting an array of holes";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var a = Array(1);
    a.sort();
    f0(expect, actual, summary);
}
