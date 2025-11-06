function f0() {
}
var BUGNUMBER = 367118;
var summary = "memory corruption in script_compile";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof Script == "undefined") {
        f0("Test skipped. Script or toSource not defined");
    } else {
        const v21 = new Script("");
        var s = v21;
        function f23() {
            s.compile("");
            f0(1);
            return "a";
        }
        var o = { toString: f23 };
        s.compile(o);
    }
    f0(expect, actual, summary);
}
