function test() {
    return typeof Array.prototype[Symbol.iterator] === "function";
}
if (!test()) {
    const v13 = new Error("Test failed");
    throw v13;
}
