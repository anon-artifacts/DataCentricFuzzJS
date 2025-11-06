function f0() {
}
var x = {};
for (let i4 = 0; i4 < 2; i4++) {
    function f12() {
    }
    Object.defineProperty(x, "y", { configurable: true, value: f12 });
    x.y();
}
f0(0, 0, "ok");
