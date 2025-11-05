function g() {
    this.x = this;
}
function f() {
    const v4 = new g();
    return v4;
}
f();
f();
f();
