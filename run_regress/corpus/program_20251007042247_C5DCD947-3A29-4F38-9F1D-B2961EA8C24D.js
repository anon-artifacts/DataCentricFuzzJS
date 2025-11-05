const v1 = {
    get x() {
    },
};
var x = Object.getOwnPropertyDescriptor(v1, "x").get;
function f(a8, a9) {
    if (a9) {
        return a8 instanceof x;
    }
}
f();
function g() {
    let v13;
    try { v13 = new x(); } catch (e) {}
    return v13;
}
const v14 = () => {
    return g();
};
v14();
