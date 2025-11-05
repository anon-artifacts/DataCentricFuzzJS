function test() {
    var def = [];
    const v6 = { foo: 1, bar: 2 };
    function f7(a8, a9, a10) {
        def.push(a9);
        Object.defineProperty(a8, a9, a10);
        return true;
    }
    const v16 = new Proxy(v6, { defineProperty: f7 });
    var p = v16;
    p.foo = 2;
    p.bar = 4;
    return (def + "") === "foo,bar";
}
if (!test()) {
    const v28 = new Error("Test failed");
    throw v28;
}
