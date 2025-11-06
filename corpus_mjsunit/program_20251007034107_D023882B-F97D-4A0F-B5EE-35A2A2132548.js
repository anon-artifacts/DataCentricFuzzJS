function test() {
    var get = [];
    const v6 = { foo: 1, bar: 2 };
    function f7(a8, a9) {
        get.push(a9);
        return a8[a9];
    }
    const v13 = new Proxy(v6, { get: f7 });
    var p = v13;
    Object.assign({}, p);
    return (get + "") === "foo,bar";
}
if (!test()) {
    const v26 = new Error("Test failed");
    throw v26;
}
