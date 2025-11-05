var o = { v: 1 };
var deopt = false;
function f6() {
    return this.v;
}
function f9(a10) {
    this.v = a10;
    if (deopt) {
    }
}
Object.defineProperty(o, "x", { get: f6, set: f9 });
function foo(a16) {
    let v17 = a16.x;
    return ++v17;
}
foo(o);
foo(o);
deopt = true;
foo(o);
