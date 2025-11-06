const v0 = {};
function f1(a2) {
    const v4 = a2.a.b;
    v4 == "";
    v0.b = true;
    return v4;
}
const v9 = { b: "" };
var x = { a: v9 };
for (let i13 = 0; i13 < 20000; i13++) {
    f1(x);
}
