function test() {
    return typeof Math.log10 === "function";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
