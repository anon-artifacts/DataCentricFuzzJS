function f0() {
}
var BUGNUMBER = 466128;
var summary = "Do not assert: !ti->stackTypeMap.matches(ti_other->stackTypeMap)";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 3; ++i15) {
        for (const v30 of [1,2,"three",4,5,6,7,8]) {
        }
    }
    f0(expect, actual, summary);
}
