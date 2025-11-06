function test() {
    return typeof Number.EPSILON === "number";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
