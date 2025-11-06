function test() {
    return typeof Map.prototype.delete === "function";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
