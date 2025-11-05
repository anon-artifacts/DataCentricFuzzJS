function f0() {
    return {};
}
const v2 = f0();
const v3 = f0();
function f4(a5, a6) {
    a6[0] = a6;
    const v7 = { __proto__: a5 };
    return a5;
}
f4(v2, v3);
f4(f0, f0);
f4(v2, v2);
