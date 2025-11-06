var a = { x: 0 };
var b = {};
function f6() {
}
Object.defineProperty(b, "x", { get: f6 });
function f(a11) {
    let v13 = a11.x;
    return 5 + v13++;
}
try {
    f(a);
    f(b);
} catch(e18) {
}
f(a);
