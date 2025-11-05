function f0() {
}
var BUGNUMBER = 355829;
var summary = "Do not assert: !argc || argv[0].isNull() || argv[0].isUndefined()";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v15 = /a/;
    new Object({ valueOf: v15 });
    f0(expect, actual, summary);
}
