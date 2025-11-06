function test() {
    return typeof String.fromCodePoint === "function";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
