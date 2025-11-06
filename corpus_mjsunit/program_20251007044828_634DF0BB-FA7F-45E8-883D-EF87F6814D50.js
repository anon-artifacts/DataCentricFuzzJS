function test() {
    return typeof Array.prototype.fill === "function";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
