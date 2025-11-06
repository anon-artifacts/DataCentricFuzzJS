function f0() {
}
function f1(a2, a3, a4, a5) {
}
var f = f1;
delete f.length;
f.hasOwnProperty("length");
f.length;
const t5 = Function.prototype;
delete t5.length;
f.length;
"length" in Function.prototype;
const t9 = Function.prototype;
t9.length = 7;
Function.prototype.length;
const t14 = Function.prototype;
delete t14.length;
Function.prototype.length;
const v34 = Function.prototype;
Object.defineProperty(v34, "length", { value: 0, configurable: true });
function f(a42, a43, a44, a45, a46) {
}
var g = f;
var desc = Object.getOwnPropertyDescriptor(g, "length");
desc?.configurable;
desc?.enumerable;
desc?.writable;
desc?.value;
delete g.length;
g.length = 12;
g.hasOwnProperty("length");
g.length;
const t30 = Function.prototype;
delete t30.length;
g.length = 13;
var desc = Object.getOwnPropertyDescriptor(g, "length");
desc.configurable;
desc.enumerable;
desc.writable;
desc.value;
function mkfun() {
    function fun(a82, a83, a84, a85, a86) {
    }
    return fun;
}
g = mkfun();
var h = mkfun();
delete h.length;
g.length;
mkfun().length;
g = mkfun();
Object.defineProperty(g, "length", { value: 0 });
delete g.length;
g.hasOwnProperty("length");
g = mkfun();
Object.defineProperty(g, "length", { value: 42 });
(desc = Object.getOwnPropertyDescriptor(g, "length")).configurable;
desc.enumerable;
desc.writable;
desc.value;
f0(0, 0, "ok");
