function test() {
    return typeof Number.isInteger === "function";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
