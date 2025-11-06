var o = {};
function f3() {
}
Object.defineProperty(o, "z", { set: f3 });
function f(a8) {
    a8.z = 12;
    return 19 + void 12;
}
f(o);
