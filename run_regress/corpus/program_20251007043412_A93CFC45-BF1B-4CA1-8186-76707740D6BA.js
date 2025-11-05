function f0() {
}
var BUGNUMBER = 345961;
var summary = "Array.prototype.shift should preserve holes";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = false;
    const v17 = new Array(2);
    var array = v17;
    array.shift();
    actual = array.hasOwnProperty(0);
    f0(expect, actual, summary);
    (array = Array(1)).shift(1);
    actual = array.hasOwnProperty(1);
    f0(expect, actual, summary);
}
