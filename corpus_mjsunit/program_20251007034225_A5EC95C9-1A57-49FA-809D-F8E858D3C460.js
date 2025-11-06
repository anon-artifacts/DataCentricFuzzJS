function f0() {
}
var UBound = 0;
var BUGNUMBER = 127557;
var summary = "Testing cloned function objects";
var cnCOMMA = ",";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
if (typeof clone == "function") {
    status = inSection(1);
    var f = evaluate(((("(function(x, y) {\n" + "    function h() { return h_peer(); }\n") + "    function h_peer() { return (x + cnCOMMA + y); }\n") + "    return h;\n") + "})");
    var g = clone(f);
    const v43 = new Object();
    g.prototype = v43;
    var h = g(5, 6);
    actual = h();
    expect = "5,6";
    addThis();
} else {
    f0("Test not run", "Test not run", "shell only test requires clone()");
}
test();
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i64 = 0; i64 < UBound; i64++) {
        f0(expectedvalues[i64], actualvalues[i64], statusitems[i64]);
    }
}
