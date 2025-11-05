function f0() {
}
var actual;
var expect = "function f () { ff (); }";
function fun() {
    const v8 = new Function("function ff () { actual = '' + ff. caller; } function f () { ff (); } f ();");
    v8();
}
fun();
f0(expect, actual, "");
