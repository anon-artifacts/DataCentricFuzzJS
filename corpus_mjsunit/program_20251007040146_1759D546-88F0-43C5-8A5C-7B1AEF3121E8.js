function f0() {
}
var BUGNUMBER = 462071;
var summary = "Do not assert: !ti->stackTypeMap.matches(ti_other->stackTypeMap)";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v14 = {};
    const v17 = {};
    for (const v22 of [v14,0,0,v17,0,{},0]) {
    }
    f0(expect, actual, summary);
}
