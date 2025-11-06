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
    function boom() {
        const v15 = [];
        var c = { __proto__: v15 };
        const v18 = {};
        const v19 = { __proto__: v18 };
        var a = { __proto__: v19 };
        c.hasOwnProperty("t");
        c.__proto__ = a;
        c.hasOwnProperty("v");
    }
    boom();
    f0(expect, actual, summary);
}
