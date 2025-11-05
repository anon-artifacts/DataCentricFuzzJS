function f0(a1, a2) {
    return ((("called a(" + a1) + ", ") + a2) + ")";
}
function f10(a11, a12) {
    return ((("called b(" + a11) + ", ") + a12) + ")";
}
var y = { a: f0, b: f10 };
function C() {
}
function f23() {
    return y[this.a == 1 ? "a" : "b"](0, 1);
}
const t12 = C.prototype;
t12.f = f23;
const v35 = new C();
obj = v35;
obj.f();
