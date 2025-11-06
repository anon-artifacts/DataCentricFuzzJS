const v1 = new WeakMap();
function f2() {
    return v1;
}
for (let i4 = 0; i4 < 200000; ++i4) {
    f2();
}
f2 | v1;
