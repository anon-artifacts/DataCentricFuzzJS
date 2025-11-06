const v2 = Function.prototype.call;
const t1 = Function.prototype;
t1.callX = v2;
var x;
function f() {
    x = f.caller;
    return x;
}
function g() {
    return f.callX(null);
}
function h1() {
    return ([0]).map(f)[0];
}
function h2() {
    x = null;
    ([0]).forEach(f);
    return x;
}
function k() {
    x = null;
    ([0,1]).sort(f);
    return x;
}
function l() {
    return f();
}
g();
g();
h1();
h1();
h2();
h2();
k();
k();
l();
l();
var baz;
function f41() {
    return "m";
}
var foo = { callX: f41 };
function bar() {
    return baz.caller;
}
function m() {
    return baz.callX(null);
}
baz = foo;
m();
baz = bar;
m();
m();
m();
m();
