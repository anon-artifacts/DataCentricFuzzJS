function test() {
    class C2 extends Array {
    }
    const v3 = new C2();
    var c = v3;
    c.push(2, 4, 6);
    return c.splice(1, 2) instanceof C2;
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
