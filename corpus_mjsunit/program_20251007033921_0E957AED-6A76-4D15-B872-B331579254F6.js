function f0() {
}
var BUGNUMBER = 441477 - 1;
var summary = "";
var actual = "No Exception";
var expect = "No Exception";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        for (i = 0; i < 5;) {
            if (i > 5) {
                throw "bad";
            }
            i++;
            continue;
        }
    } catch(e26) {
        actual = e26 + "";
    }
    f0(expect, actual, summary);
}
