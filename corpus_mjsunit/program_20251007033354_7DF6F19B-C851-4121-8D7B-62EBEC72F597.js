function f0() {
}
var BUGNUMBER = 346027;
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
    f0(expect, actual = isNaN(d.getFullYear()), summary);
}
