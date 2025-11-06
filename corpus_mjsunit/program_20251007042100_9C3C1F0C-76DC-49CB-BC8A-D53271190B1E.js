function test() {
    class C1 {
        qux(a3) {
            return "foo" + a3;
        }
    }
    class C6 extends C1 {
        qux(a8) {
            return super.qux("bar" + a8);
        }
    }
    const v13 = new C6();
    return v13.qux("baz") === "foobarbaz";
}
if (!test()) {
    const v21 = new Error("Test failed");
    throw v21;
}
