function f0() {
}
var BUGNUMBER = 462407;
var summary = "Do not assert: !ti->stackTypeMap.matches(ti_other->stackTypeMap)";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function f() {
    const v13 = {};
    for (const v22 of [0,v13,0,1.5,{},0,1.5,0,0]) {
    }
}
f();
f0(expect, actual, summary);
