function f0() {
}
var BUGNUMBER = 452884;
var summary = "Do not crash in switch";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i15 = 0; i15 < 5; ++i15) {
        switch (1.1) {
            case NaN:
            case 2:
        }
    }
    f0(expect, actual, summary);
}
