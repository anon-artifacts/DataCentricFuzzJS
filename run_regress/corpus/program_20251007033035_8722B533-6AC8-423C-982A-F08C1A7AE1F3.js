function test() {
    return typeof String.prototype.codePointAt === "function";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
