function f0() {
}
var BUGNUMBER = 454682;
var summary = "Do not crash with JIT in MatchRegExp";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v16 = new String("foo");
    var a = v16;
    for (i = 0; i < 300; i++) {
        a.match(/bar/);
    }
    f0(expect, actual, summary);
}
