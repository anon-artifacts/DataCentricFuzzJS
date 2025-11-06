function f0() {
}
var BUGNUMBER = 379245;
var summary = "inline calls";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var fThis;
    function f() {
        fThis = this;
        return ({ x: f }).x;
    }
    const t15 = f();
    t15();
    if (this !== fThis) {
        throw "bad this";
    }
    f0(expect, actual, summary);
}
