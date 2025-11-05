function foo(a1, a2) {
    this.g = a1 + a2;
}
var a = 0;
function f7() {
    const v9 = Object.prototype;
    return Object.defineProperty(v9, "g", {});
}
var b = { valueOf: f7 };
const v15 = new foo(a, b);
var c = v15;
