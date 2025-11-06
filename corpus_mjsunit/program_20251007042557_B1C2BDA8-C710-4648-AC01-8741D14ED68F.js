function test() {
    return Number("0b1") === 1;
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
