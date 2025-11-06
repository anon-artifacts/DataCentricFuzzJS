function f0() {
}
var BUGNUMBER = 238881;
var summary = "const propagation for switch too aggressive";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
const C = 42;
function f(a14, a15) {
    switch (a15) {
        case a14:
            return 1;
        default:
            return 0;
    }
}
actual = f(44, 42);
f0(expect = 0, actual, summary);
