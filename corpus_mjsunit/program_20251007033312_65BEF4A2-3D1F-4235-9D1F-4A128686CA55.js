function test() {
    return "species" in Symbol;
}
if (!test()) {
    const v8 = new Error("Test failed");
    throw v8;
}
