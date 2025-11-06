function test() {
    return typeof Math.clz32 === "function";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
