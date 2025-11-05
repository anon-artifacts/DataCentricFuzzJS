function f0() {
}
function f1() {
    return o.g();
}
function f4() {
    return arguments.callee.caller;
}
var o = { f: f1, g: f4 };
var c = o.f();
var i = "f";
var d = o[i]();
f0(true, (c === o.f) && (d === o.f()), "");
