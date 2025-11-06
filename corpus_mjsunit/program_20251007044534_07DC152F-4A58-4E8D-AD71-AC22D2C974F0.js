function f0() {
}
var BUGNUMBER = 452786;
var summary = "Do not crash with (new Date()).getMonth.call(new Function())";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        const v15 = new Function();
        const v17 = new Date();
        v17.getMonth.call(v15);
    } catch(e20) {
    }
    f0(expect, actual, summary);
}
