for (const v5 of ["foo",Symbol.for("quux")]) {
    var target = {};
    Object.defineProperty(target, v5, { value: "bar", writable: false, configurable: false });
    const v14 = () => {
        return true;
    };
    var handler = { set: v14 };
    const v19 = new Proxy(target, handler);
    for (const v23 of [v19,Proxy.revocable(target, handler).proxy]) {
        const v24 = () => {
            v23[v5] = "baz";
            return "baz";
        };
        try { v24(); } catch (e) {}
    }
}
