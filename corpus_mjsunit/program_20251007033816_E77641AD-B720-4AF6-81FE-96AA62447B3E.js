function f0() {
}
var BUGNUMBER = 427196;
var summary = "Do not assert: OBJ_SCOPE(pobj)->object == pobj";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v14 = [];
    var c = { __proto__: v14 };
    const v17 = {};
    const v18 = { __proto__: v17 };
    var a = { __proto__: v18 };
    c.hasOwnProperty;
    c.__proto__ = a;
    c.hasOwnProperty;
    f0(expect, actual, summary);
}
