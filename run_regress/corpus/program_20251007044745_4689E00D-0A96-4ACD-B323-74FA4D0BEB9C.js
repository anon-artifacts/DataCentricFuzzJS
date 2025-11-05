function f0() {
}
var BUGNUMBER = 375183;
var summary = "__noSuchMethod__ should not allocate beyond fp->script->depth";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v19 = {
        get __noSuchMethod__() {
            f0("Executed");
            const v18 = new Object();
            return v18;
        },
    };
    var obj = v19;
    try {
        obj.x();
    } catch(e22) {
    }
    f0(expect, actual, summary + ":1");
    const v26 = {};
    obj = { __noSuchMethod__: v26 };
    try {
        obj.x();
    } catch(e29) {
    }
    f0(expect, actual, summary + ":2");
    obj = {};
    obj.__noSuchMethod__ = {};
    try {
        obj.x();
    } catch(e36) {
    }
    f0(expect, actual, summary + ":3");
}
