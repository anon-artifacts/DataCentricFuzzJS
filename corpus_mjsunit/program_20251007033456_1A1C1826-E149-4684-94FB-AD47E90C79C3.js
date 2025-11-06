function test() {
    return typeof Math.cosh === "function";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
