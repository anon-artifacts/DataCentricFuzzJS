function f0() {
}
var BUGNUMBER = 353079;
var summary = "Do not Assert op == JSOP_LEAVEBLOCKEXPR... with WAY_TOO_MUCH_GC";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (const v16 in [1]) {
        {
            let x;
            function f20(a21) {
                return a21;
            }
            for (const v23 in f20("")) {
            }
        }
    }
    f0(expect, actual, summary);
}
