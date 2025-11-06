function f0() {
}
var BUGNUMBER = 448595;
var summary = "scope chain var declaration with initialiser in |with| clauses";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var f;
    expect = "bar";
    function f17() {
        var e = "bar";
        with ({ e: "foo" }) {
            var e = "wibble";
        }
        actual = e;
    }
    f = f17;
    f();
    f0(expect, actual, summary + ": with");
    function f28() {
        var e = "bar";
        try {
            throw { e: "foo" };
        } catch(e33) {
            var e = "wibble";
        }
        actual = e;
    }
    f = f28;
    f();
    f0(expect, actual, summary + ": catch");
}
