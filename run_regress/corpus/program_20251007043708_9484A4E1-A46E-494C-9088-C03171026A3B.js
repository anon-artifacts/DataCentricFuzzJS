function f0() {
}
var BUGNUMBER = 459628;
var summary = "Do not assert: STOBJ_GET_SLOT(obj, map->freeslot).isUndefined()";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        for (let i16 = 0; i16 < 4; ++i16) {
            const v24 = new Date();
            v24[0] = 3;
        }
    }
    f14();
    f0(expect, actual, summary);
}
