function foo() {
    this.a = 5;
    this.b = 2;
}
function f5(a6, a7) {
    return a6 + a7;
}
const t7 = foo.prototype;
t7.add = f5;
