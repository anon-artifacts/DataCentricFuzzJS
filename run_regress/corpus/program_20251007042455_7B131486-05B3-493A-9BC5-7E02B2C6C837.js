function f0() {
}
var BUGNUMBER = 483103;
var summary = "TM: Do not assert: p->isQuad()";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v16 = new String("");
    var t = v16;
    for (let i19 = 0; i19 < 3; ++i19) {
        var e = t["-1"];
    }
    f0(expect, actual, summary);
}
