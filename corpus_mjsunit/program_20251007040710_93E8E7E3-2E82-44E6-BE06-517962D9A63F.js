function f0() {
}
var BUGNUMBER = 373827;
var summary = "Do not assert: OBJ_GET_CLASS(cx, obj)->flags & JSCLASS_HAS_PRIVATE";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    {
        function f14() {
        }
        let  = [{ x: f14 }];
    }
    f0(expect, actual, summary);
}
