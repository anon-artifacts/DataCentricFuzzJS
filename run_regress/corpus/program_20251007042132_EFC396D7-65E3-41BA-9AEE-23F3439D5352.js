const v0 = {};
function f1() {
}
var f = f1.bind(v0);
const v6 = new Proxy(f, {});
var p = v6;
function f9() {
}
Object.defineProperty(p, "caller", { get: f9 });
