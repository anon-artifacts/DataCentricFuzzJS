function f0() {
}
var BUGNUMBER = 436741;
var summary = "Do not assert: OBJ_IS_NATIVE(obj)";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof window == "undefined") {
        f0("This test is only meaningful in the browser.");
    } else {
        try {
            const v21 = [{}];
            const t15 = window.__proto__;
            t15.__proto__ = v21;
        } catch(e23) {
        }
        for (const v24 in window) {
        }
    }
    f0(expect, actual, summary);
}
