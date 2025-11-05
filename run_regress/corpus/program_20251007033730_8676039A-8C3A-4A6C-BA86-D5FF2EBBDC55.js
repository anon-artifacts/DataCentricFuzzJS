function f0() {
}
var BUGNUMBER = 451483;
var summary = "[].splice.call(0) == []";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = true;
    var result = ([]).splice.call(0);
    f0("[].splice.call(0) = " + result);
    f0(expect, actual = (result instanceof Array) && (result.length == 0), summary);
}
