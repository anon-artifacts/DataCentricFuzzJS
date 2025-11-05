function f0() {
}
var BUGNUMBER = 367119;
var summary = "memory corruption in script_exec";
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
            const v30 = Array(101).join("aaaaa");
            const v33 = Array(11).join(v30);
            Array(11).join(v33);
            return {};
        }
        var o = { valueOf: f23 };
        s.exec(o);
    }
    f0(expect, actual, summary);
}
