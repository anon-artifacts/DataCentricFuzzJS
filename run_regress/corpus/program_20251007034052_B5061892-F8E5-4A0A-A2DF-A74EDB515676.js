function test() {
    const v2 = Symbol();
    var object = { foo: v2 };
    object[Symbol()] = 1;
    var array = [Symbol()];
    return ((JSON.stringify(object) === "{}") && (JSON.stringify(array) === "[null]")) && (JSON.stringify(Symbol()) === undefined);
}
if (!test()) {
    const v27 = new Error("Test failed");
    throw v27;
}
