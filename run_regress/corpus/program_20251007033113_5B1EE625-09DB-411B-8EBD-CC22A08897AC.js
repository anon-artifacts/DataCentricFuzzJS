function test() {
    class C1 {
    }
    var c1 = C1;
    {
        class C3 {
        }
        var c2 = C3;
    }
    return C1 === c1;
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
