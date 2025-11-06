function f0(a1) {
    return a1.f;
}
function f3(a4) {
    return a4.e;
}
function f6(a7, a8) {
    return a7(a8);
}
f3({ e: 1, f: 2 });
f3({ d: 1, e: 2, f: 3 });
let v21 = { f: 42, e: 23 };
const v25 = { f: 42, e: 23, g: 100 };
let v26 = 0;
var n = 1000000;
for (let i30 = 0; i30 < n; ++i30) {
    v26 += f3(v21);
    v26 += f6(f0, v21);
    v21 = v25;
}
const v37 = n * v21;
v21.e;
v26 != (v37 + n);
