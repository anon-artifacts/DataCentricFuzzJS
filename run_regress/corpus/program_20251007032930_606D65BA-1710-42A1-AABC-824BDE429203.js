function f() {
    return Object(Symbol());
}
for (let i6 = 0; i6 < 4; i6++) {
    f();
    gc();
}
