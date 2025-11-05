var global;
function g() {
    global = this;
}
const v5 = Number.prototype;
Object.defineProperty(v5, "prop", { get: g });
function f(a11) {
    a11.prop;
}
f(1);
f(1);
f(1);
