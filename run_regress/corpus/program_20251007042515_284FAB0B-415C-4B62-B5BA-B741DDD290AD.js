function f0() {
}
var BUGNUMBER = 349362;
var summary = "generator toString should be [object Generator]";
var actual = "";
var expect = "[object Generator]";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function* f14() {
        yield 3;
    }
    var y = f14;
    f0(expect, actual = y().toString(), summary);
}
