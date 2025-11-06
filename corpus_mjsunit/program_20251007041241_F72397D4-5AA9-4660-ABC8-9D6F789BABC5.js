function test() {
    return Reflect.getPrototypeOf([]) === Array.prototype;
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
