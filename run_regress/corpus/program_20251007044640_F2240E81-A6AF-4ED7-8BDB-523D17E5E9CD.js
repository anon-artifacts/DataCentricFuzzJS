function test() {
    var symbol = Symbol();
    try {
        new Symbol();
    } catch(e5) {
        return true;
    }
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
