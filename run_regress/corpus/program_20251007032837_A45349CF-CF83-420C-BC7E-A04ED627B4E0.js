function test() {
    return Object.isSealed("a") === true;
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
