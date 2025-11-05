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
    let x;
    x -= 0;
    with ({ x: 0 }) {
        [];
        const x = undefined;
    }
    f0(expect, actual, summary);
}
