function f0() {
}
function c(a2) {
    function f3() {
    }
    this.f = f3;
}
c(0);
Object.defineProperty(this, "f", { configurable: true, enumerable: true, value: 3 });
f0(0, 0, "");
