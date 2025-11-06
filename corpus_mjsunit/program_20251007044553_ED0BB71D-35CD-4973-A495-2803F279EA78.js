function test() {
    new WeakSet();
    try {
        WeakSet();
        return false;
    } catch(e5) {
        return true;
    }
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
