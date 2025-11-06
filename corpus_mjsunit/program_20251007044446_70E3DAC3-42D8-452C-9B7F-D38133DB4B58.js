function f0() {
}
var BUGNUMBER = 429739;
var summary = "Do not assert: OBJ_GET_CLASS(cx, obj)->flags & JSCLASS_HAS_PRIVATE";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var actual;
    try {
        var o = { __noSuchMethod__: Function };
        const t11 = o.y;
        const v16 = new t11();
        actual = v16 + "";
        const v21 = new Error("didn't throw, produced a value");
        throw v21;
    } catch(e22) {
        actual = e22;
    }
    f0("TypeError", actual.name, "bad error name");
    f0(true, /is not a constructor/.test(actual), summary);
}
