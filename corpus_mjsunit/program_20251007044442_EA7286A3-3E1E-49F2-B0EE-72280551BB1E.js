function TestGCDuringToObjectForWith() {
    function f(a2) {
        if (a2 == "warmup") {
            return g();
        }
        with (a2) {
            return x;
        }
    }
    function g() {
    }
    f("warmup");
    f("warmup");
    g = null;
    f({ x: 23 });
    f({ x: 42 });
    f({ x: 65 });
    const t16 = Number.prototype;
    t16.x = 99;
    f(0);
    f(0);
}
TestGCDuringToObjectForWith();
