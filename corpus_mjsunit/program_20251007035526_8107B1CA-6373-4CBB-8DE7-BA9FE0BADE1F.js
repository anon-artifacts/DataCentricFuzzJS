function f0() {
}
var BUGNUMBER = 355829;
var summary = "js_ValueToObject should return the original object if OBJ_DEFAULT_VALUE returns a primitive value";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        return null;
    }
    var a = [{ valueOf: f14 }];
    a.toLocaleString();
    f0(expect, actual, summary);
}
