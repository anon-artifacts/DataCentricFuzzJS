function f0() {
    function f2() {
    }
    Object.defineProperty(this, "appendToActual", { get: f2 });
}
for (let v3 = 0; v3 < 5; v3++) {
    try { f0(); } catch (e) {}
}
