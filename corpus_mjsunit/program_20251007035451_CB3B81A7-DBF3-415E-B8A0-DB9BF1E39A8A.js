function test() {
    class C2 extends RegExp {
    }
    const v4 = new C2("baz");
    var r = v4;
    return r.test("foobarbaz");
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
