function test() {
    class C2 extends Boolean {
    }
    const v4 = new C2(true);
    var c = v4;
    return (c instanceof Boolean) && (c == true);
}
if (!test()) {
    const v14 = new Error("Test failed");
    throw v14;
}
