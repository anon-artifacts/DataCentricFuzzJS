function f0() {
}
var BUGNUMBER = 346363;
var summary = "Date.prototype.setFullYear()";
var actual = "";
var expect = true;
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v15 = new Date();
    var d = v15;
    d.setFullYear();
    d.setFullYear(2006);
    f0(expect, actual = d.getFullYear() == 2006, summary);
}
