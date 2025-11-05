const v1 = Boolean.prototype;
function f3() {
    return this;
}
Object.defineProperty(v1, "v", { get: f3 });
function f(a9) {
    return a9.v;
}
typeof f(true);
typeof f(true);
typeof f(true);
typeof f(true);
