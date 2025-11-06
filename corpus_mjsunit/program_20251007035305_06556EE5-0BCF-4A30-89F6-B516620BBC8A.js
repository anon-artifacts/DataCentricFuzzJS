function test() {
    var a = { foo: 1, bar: 2 };
    const v6 = { bar: true };
    a[Symbol.unscopables] = v6;
    with (a) {
        return (foo === 1) && (typeof bar === "undefined");
    }
}
if (!test()) {
    const v21 = new Error("Test failed");
    throw v21;
}
