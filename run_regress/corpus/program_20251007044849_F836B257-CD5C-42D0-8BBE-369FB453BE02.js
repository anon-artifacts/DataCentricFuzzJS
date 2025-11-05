function test() {
    return typeof Array.prototype.find === "function";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
