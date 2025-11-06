function f0() {
}
if (typeof window === "undefined") {
    window = this;
}
var res = false;
function f11() {
    return this === window;
}
function f14(a15) {
    res = this === window;
}
Object.defineProperty(this, "foo", { configurable: true, get: f11, set: f14 });
function f21() {
    for (let i23 = 0; i23 < 3000; ++i23) {
        window.foo = i23;
        window.foo;
    }
}
f21();
f0(true, true);
