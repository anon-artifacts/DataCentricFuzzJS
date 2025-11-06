function f0() {
}
var BUGNUMBER = 465484;
var summary = "TM: Do not assert: _allocator.active[FST0] && _fpuStkDepth == -1 || " + "!_allocator.active[FST0] && _fpuStkDepth == 0";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let v20 of [2,2,2]) {
        v20 %= v20;
        v20 %= v20;
    }
    f0(expect, actual, summary);
}
