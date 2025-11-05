function f0() {
}
var BUGNUMBER = 352797;
var summary = "Do not assert: OBJ_GET_CLASS(cx, obj) == &js_BlockClass";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof Script == "undefined") {
        f0("Test skipped. Script not defined.");
    } else {
        function f20() {
            const v21 = /a/g;
            const v23 = new Script("");
            let x = ("fafafa").replace(v21, v23);
        }
        f20();
    }
    f0(expect, actual, summary);
}
