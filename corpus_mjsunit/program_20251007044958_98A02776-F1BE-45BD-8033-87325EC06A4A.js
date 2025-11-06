function f0() {
}
var BUGNUMBER = 465261;
var summary = "TM: Do not assert: ";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 2; ++i15) {
        for (const v29 of [0,true,void 0,0,void 0]) {
            if (v29) {
            }
        }
    }
    f0(expect, actual, summary);
}
