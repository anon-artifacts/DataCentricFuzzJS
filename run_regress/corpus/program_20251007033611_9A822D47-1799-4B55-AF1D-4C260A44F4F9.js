function test() {
    class C1 {
    }
    class C2 extends C1 {
    }
    const v3 = new C2();
    return (v3 instanceof C1) && C1.isPrototypeOf(C2);
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
