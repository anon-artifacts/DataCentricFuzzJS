function test() {
    return typeof Number.isNaN === "function";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
