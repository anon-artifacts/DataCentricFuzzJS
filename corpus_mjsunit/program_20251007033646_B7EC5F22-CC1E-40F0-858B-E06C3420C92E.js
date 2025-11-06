function f() {
    let v2;
    try {
    const t0 = null;
    v2 = t0();
    } catch (e) {}
    -v2;
}
f();
