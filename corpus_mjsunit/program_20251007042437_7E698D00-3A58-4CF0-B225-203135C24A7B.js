function f0() {
}
var BUGNUMBER = 452498;
var summary = "TM: upvar2 regression tests";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v24 = {
        set z(a15) {
        },
        set y(a17) {
            return --x;
        },
        set w(a21) {
            return --w;
        },
    };
    f0(expect, actual, summary + ": 3");
}
