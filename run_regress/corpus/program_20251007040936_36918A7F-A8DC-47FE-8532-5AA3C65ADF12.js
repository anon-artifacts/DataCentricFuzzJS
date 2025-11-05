function g() {
    this.x = {};
}
function f() {
    new g();
}
function deopt(a6) {
}
f();
f();
Object.prototype.__defineSetter__("x", deopt);
f();
