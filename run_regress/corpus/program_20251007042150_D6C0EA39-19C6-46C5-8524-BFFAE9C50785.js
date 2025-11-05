function test() {
    class C2 extends Array {
    }
    const v3 = new C2();
    var c = v3;
    return ((c instanceof C2) && (c instanceof Array)) && (Object.getPrototypeOf(C2) === Array);
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
