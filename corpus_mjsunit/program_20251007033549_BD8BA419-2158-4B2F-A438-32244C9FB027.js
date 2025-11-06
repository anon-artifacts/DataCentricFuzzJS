function f0() {
}
try {
    const v2 = TypeError.prototype;
    const t4 = { prototype: v2 };
    new t4();
} catch(e5) {
}
f0(0, 0, "ok");
