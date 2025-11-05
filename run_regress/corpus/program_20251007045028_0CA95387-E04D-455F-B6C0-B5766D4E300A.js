function test() {
    class C2 extends Array {
    }
    const v3 = new C2();
    var c = v3;
    return c.map(Boolean) instanceof C2;
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
