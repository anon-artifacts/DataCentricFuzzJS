function f0() {
}
var BUGNUMBER = 495907;
var summary = "Read upvar from trace-entry frame when created with top-level let";
var actual = "";
var expect = "00112233";
start_test();
var o = [];
for (let i14 = 0; i14 < 4; ++i14) {
    function f20() {
        for (let i22 = 0; i22 < 2; ++i22) {
            o.push(i14);
        }
    }
    f20();
}
actual = o.join("");
finish_test();
function start_test() {
    f0(BUGNUMBER);
    f0(summary);
}
function finish_test() {
    f0(expect, actual, summary);
}
