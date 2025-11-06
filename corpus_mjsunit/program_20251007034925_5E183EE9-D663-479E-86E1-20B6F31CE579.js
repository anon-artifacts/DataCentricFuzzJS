function f0() {
    this.y = 3;
}
a = { f: f0 };
function f5() {
    this.y = 4;
}
b = { f: f5 };
function x(a11) {
    return a11.f();
}
x(a);
x(b);
x(a);
x(b);
x(a);
x(b);
x(a);
x(b);
