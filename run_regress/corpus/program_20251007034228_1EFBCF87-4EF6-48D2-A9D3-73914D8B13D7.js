function f0() {
}
var BUGNUMBER = 139316;
var summary = "Do not crash in js_ReportIsNotDefined()";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
var str = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
function makeError() {
    try {
        foo();
    } catch(e16) {
        return e16;
    }
}
function f17() {
    function c() {
    }
    function f19() {
    }
    const v21 = { a: 1 };
    const v25 = Number.MAX_VALUE;
    const v28 = new Number(1);
    const v32 = new String("newstring");
    const v36 = new Boolean(0);
    const v38 = new Date();
    var e = makeError(c, f19, v21, null, undefined, v25, 0, v28, "hello world", str, v32, true, v36, v38);
    f0(e.stack);
}
f = f17;
f();
f0(expect, actual, summary);
