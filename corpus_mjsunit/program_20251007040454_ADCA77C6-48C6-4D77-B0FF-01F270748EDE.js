function test() {
    return typeof Set.prototype.clear === "function";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
