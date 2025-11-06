function test() {
    new WeakSet(null);
    return true;
}
if (!test()) {
    const v9 = new Error("Test failed");
    throw v9;
}
