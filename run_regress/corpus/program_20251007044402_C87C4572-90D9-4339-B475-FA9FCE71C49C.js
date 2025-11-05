function test() {
    return typeof Number.MAX_SAFE_INTEGER === "number";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
