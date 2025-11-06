function test() {
    return typeof Set.prototype.forEach === "function";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
