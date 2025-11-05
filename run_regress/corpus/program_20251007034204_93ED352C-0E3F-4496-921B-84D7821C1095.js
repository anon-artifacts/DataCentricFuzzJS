function f0() {
}
var BUGNUMBER = 313938;
var summary = "Root access in jsscript.c";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
if (typeof Script == "undefined") {
    f0("Test skipped. Script not defined.");
    f0("Script not defined, Test skipped.", "Script not defined, Test skipped.", summary);
} else {
    var str = (" 2;").substring(1);
    ("1").substring(2);
    expect = Script.prototype.compile(str).toSource();
    function f30() {
        var tmp = str;
        str = null;
        return tmp;
    }
    var likeString = { toString: f30 };
    TWO = 2;
    function f37() {
        if (typeof gc == "function") {
            gc();
        }
        for (let i44 = 0; i44 != 40000; ++i44) {
            var tmp = 1e+100 * TWO;
        }
        return this;
    }
    var likeObject = { valueOf: f37 };
    var s = Script.prototype.compile(likeString, likeObject);
    var actual = s.toSource();
    f0(expect === actual);
    f0(expect, actual, summary);
}
