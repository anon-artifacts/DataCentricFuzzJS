function Bar() {
    this.foo = 5;
}
const v3 = Bar.prototype;
function f5() {
    return this.foo;
}
function f8(a9) {
    this.foo = a9;
}
Object.defineProperty(v3, "data", { get: f5, set: f8, configurable: true });
