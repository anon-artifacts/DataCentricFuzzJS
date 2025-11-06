function test() {
    var gopd = [];
    const v4 = {};
    function f5(a6, a7) {
        gopd.push(a7);
        return Object.getOwnPropertyDescriptor(a6, a7);
    }
    const v12 = new Proxy(v4, { getOwnPropertyDescriptor: f5 });
    var p = v12;
    p.foo = 1;
    p.bar = 1;
    return (gopd + "") === "foo,bar";
}
if (!test()) {
    const v24 = new Error("Test failed");
    throw v24;
}
