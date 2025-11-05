function test() {
    return typeof String.prototype[Symbol.iterator] === "function";
}
if (!test()) {
    const v13 = new Error("Test failed");
    throw v13;
}
