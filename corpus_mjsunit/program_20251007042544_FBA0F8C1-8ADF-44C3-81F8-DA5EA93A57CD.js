function test() {
    return typeof Array.prototype.keys === "function";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
