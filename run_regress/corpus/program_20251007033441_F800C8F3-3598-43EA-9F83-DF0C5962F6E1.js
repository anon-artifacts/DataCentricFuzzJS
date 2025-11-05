function f0() {
}
var BUGNUMBER = 355820;
var summary = "Remove non-standard Script object";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0("This test will fail in gecko prior to 1.9");
    f0(expect = "undefined", actual = typeof Script, summary);
}
