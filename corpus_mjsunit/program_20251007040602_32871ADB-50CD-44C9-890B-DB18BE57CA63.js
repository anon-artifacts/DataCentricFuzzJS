function f0() {
}
if (typeof evalcx == "function") {
    var cx = evalcx("");
    evalcx("function f() { return this; }", cx);
    var f = cx.f;
    f();
}
f0(0, 0, "");
