function test() {
    class C2 extends Number {
    }
    const v4 = new C2(6);
    var c = v4;
    return (c instanceof Number) && (+c === 6);
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
