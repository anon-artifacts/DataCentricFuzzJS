function f0() {
}
var BUGNUMBER = 479551;
var summary = "Do not assert: (cx)->requestDepth || (cx)->thread == (cx)->runtime->gcThread";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof shapeOf != "function") {
        actual = "Test skipped: requires shell";
        expect = "Test skipped: requires shell";
        f0("Test skipped: requires shell");
    } else {
        var o = { a: 3, b: 2 };
        shapeOf(o);
        var p = {};
        p.a = 3;
        p.b = 2;
        shapeOf(p);
    }
    f0(expect, actual, summary);
}
