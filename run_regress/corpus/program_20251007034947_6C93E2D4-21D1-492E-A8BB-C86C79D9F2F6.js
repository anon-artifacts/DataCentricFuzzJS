executed = false;
const v3 = Object.prototype;
function f5() {
    executed = true;
}
Object.defineProperty(v3, "x", { set: f5 });
function A() {
    this.x = 12;
}
new A();
