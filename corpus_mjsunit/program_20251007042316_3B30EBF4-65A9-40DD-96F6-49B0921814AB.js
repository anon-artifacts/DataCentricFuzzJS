function f(a1) {
    return (a1.x + a1.x) + a1.y;
}
f({ x: 1, y: 2 });
const v14 = { x: 1, y: 2 };
f({ __proto__: v14 });
const v20 = { x: 0, y: 2 };
f({ __proto__: v20, x: 1 });
var global = 1;
const v28 = { y: 2 };
function f30() {
    return global++;
}
f(Object.defineProperty(v28, "x", { get: f30 }));
