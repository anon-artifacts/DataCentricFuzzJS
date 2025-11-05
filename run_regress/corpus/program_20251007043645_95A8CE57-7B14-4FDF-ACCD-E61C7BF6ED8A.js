function f0() {
}
var BUGNUMBER = 465460;
var summary = "TM: valueOf in a loop: do not assert";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v15 = {};
    for (const v24 of [1,v15,1,null,1,{},1,null,1]) {
    }
    f0(expect, actual, summary);
}
