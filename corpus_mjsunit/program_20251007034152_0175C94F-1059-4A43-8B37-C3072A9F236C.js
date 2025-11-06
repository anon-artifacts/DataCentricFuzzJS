function f0() {
}
if (typeof evalcx == "function") {
    var cx = evalcx("");
    evalcx("function f() { return this; }", cx);
    f = cx.f;
    f();
    evalcx("function g() { 'use strict'; return this; }", cx);
    g = cx.g;
    g();
}
f0(0, 0, "ok");
