function f0() {
}
var BUGNUMBER = 446169;
var summary = "Do not assert: Thin_GetWait(tl->owner) in thread-safe build";
var actual = "No Crash";
var expect = "No Crash";
const v9 = {};
const v10 = {};
const v11 = {};
var array = [v9,v10,v11,{}];
function foo() {
    for (let i17 = 0; i17 != ((42 * 42) * 42); ++i17) {
        var obj = array[i17 % array.length];
        obj["a" + i17] = 1;
        var tmp = {};
        tmp["a" + i17] = 2;
    }
}
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof scatter == "function") {
        scatter([foo,foo,foo,foo]);
    } else {
        f0("Test skipped. Requires thread-safe build with scatter function.");
    }
    f0(expect, actual, summary);
}
