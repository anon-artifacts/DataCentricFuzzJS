function test() {
    return typeof Number.MIN_SAFE_INTEGER === "number";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
