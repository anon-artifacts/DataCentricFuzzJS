function f0() {
}
if (typeof newGlobal == "function") {
    var gsame = newGlobal("same-compartment");
    gsame.eval("function f() { return this; }");
    f = gsame.f;
    f();
    gsame.eval("function g() { 'use strict'; return this; }");
    g = gsame.g;
    g();
    var gnew = newGlobal();
    gnew.eval("function f() { return this; }");
    f = gnew.f;
    f();
    gnew.eval("function g() { 'use strict'; return this; }");
    g = gnew.g;
    g();
}
f0(0, 0, "ok");
