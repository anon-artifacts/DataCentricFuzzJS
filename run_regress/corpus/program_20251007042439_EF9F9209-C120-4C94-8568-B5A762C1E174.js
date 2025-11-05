function test() {
    var obj = {};
    Reflect.defineProperty(obj, "foo", { value: 123 });
    const v10 = obj.foo === 123;
    const v13 = Object.freeze({});
    return v10 && (Reflect.defineProperty(v13, "foo", { value: 123 }) === false);
}
if (!test()) {
    const v25 = new Error("Test failed");
    throw v25;
}
