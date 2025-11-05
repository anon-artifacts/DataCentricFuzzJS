function test() {
    return typeof RegExp.prototype.compile === "function";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
