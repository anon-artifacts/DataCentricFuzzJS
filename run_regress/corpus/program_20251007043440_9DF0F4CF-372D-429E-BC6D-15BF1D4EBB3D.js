function test() {
    class C2 extends Array {
    }
    return C2.from({ length: 0 }) instanceof C2;
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
