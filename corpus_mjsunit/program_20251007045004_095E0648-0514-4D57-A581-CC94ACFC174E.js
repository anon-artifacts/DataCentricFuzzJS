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
    for (let i15 = 0; i15 < 9; ++i15) {
        let m = i15;
        if ((i15 % 3) == 1) {
            function f27() {
                return m;
            }
            f0("" + f27());
        }
    }
    for (let i32 = 0; i32 < 3; ++i32) {
        for (let i39 = 0; i39 < 3; ++i39) {
            const v46 = i32 | (i32 % i39);
            g = v46;
            if (v46) {
                with ({}) {
                }
            }
        }
    }
    f0(expect, actual, summary);
}
