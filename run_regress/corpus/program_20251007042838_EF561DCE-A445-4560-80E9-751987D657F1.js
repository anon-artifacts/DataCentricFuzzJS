function f() {
    var o = {};
    Object.defineProperty(o, "x", { get: undefined, set: undefined });
    for (let i10 = 0; i10 < 20; i10++) {
        var ex = null;
        try {
            o.x = 9;
        } catch(e19) {
            ex = e19;
        }
        ex instanceof TypeError;
        o.x;
    }
}
f();
