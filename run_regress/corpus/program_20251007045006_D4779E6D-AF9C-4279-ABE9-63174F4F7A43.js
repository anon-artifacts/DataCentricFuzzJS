function test() {
    class C1 {
    }
    try {
        C1();
    } catch(e3) {
        return true;
    }
}
if (!test()) {
    const v9 = new Error("Test failed");
    throw v9;
}
