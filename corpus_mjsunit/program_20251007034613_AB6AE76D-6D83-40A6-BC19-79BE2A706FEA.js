function f0() {
}
var BUGNUMBER = 167328;
var summary = "Normal error reporting code should fill Error object properties";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
expect = "TypeError:19";
try {
    function f12() {
        const v14 = new Object();
        return v14;
    }
    var obj = { toString: f12 };
    var result = String(obj);
    actual = "no error";
} catch(e21) {
    actual = (e21.name + ":") + e21.lineNumber;
}
f0(expect, actual, summary);
