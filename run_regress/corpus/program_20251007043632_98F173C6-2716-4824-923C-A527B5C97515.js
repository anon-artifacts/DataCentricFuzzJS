function f0() {
}
var BUGNUMBER = 416460;
var summary = "Do not assert: SCOPE_GET_PROPERTY(OBJ_SCOPE(pobj), ATOM_TO_JSID(atom))";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v15 = { 2: 3 };
    const t11 = /a/.__proto__;
    t11.__proto__ = v15;
    var b = /b/;
    b["2"];
    b["2"];
    f0(expect, actual, summary);
}
