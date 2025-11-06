function f0() {
}
var x = {};
var t = Object.create(x);
Object.preventExtensions(t);
Object.setPrototypeOf(t, x);
Object.setPrototypeOf(Object.prototype, null);
f0(true, true);
