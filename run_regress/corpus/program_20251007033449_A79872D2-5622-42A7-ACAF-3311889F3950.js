function f(a1) {
    return a1.x;
}
var o1 = { x: 1 };
const v7 = { x: 2 };
var o2 = { __proto__: v7 };
f(o2);
f(o2);
f(o2);
f(o1);
f(o1);
f(o2);
