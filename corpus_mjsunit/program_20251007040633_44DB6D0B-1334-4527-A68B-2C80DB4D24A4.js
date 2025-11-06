function test() {
    class C2 extends Array {
    }
    return C2.of(0) instanceof C2;
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
