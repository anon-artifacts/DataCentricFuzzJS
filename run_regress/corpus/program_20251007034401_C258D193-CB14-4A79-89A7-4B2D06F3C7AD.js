function test() {
    return typeof Math.fround === "function";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
