function f0() {
}
var BUGNUMBER = 352291;
var summary = "disassembly of regular expression";
var actual = "";
var expect = "TypeError: /g/g is not a function";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof dis != "function") {
        expect = "disassembly not supported, test skipped.";
        actual = "disassembly not supported, test skipped.";
    } else {
        try {
            dis(/g/g);
        } catch(e21) {
            actual = e21 + "";
        }
    }
    f0(expect, actual, summary);
}
