function f0() {
}
var BUGNUMBER = 396326;
var summary = "Do not assert trying to disassemble get(var|arg) prop";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof dis == "undefined") {
        f0("disassembly not supported. test skipped.");
        f0(expect, actual, summary);
    } else {
        function f1() {
            var v;
            return v.prop;
        }
        dis(f1);
        f0(expect, actual, summary + ": function f1() { var v; return v.prop };");
        function f2(a30) {
            return a30.prop;
        }
        dis(f2);
        f0(expect, actual, summary + ": function f2(arg) { return arg.prop };");
        function f3() {
            return this.prop;
        }
        dis(f3);
        f0(expect, actual, summary + ": function f3() { return this.prop };");
    }
}
