function test() {
    class C1 {
        qux(a3) {
            return this.foo + a3;
        }
    }
    class C6 extends C1 {
        qux(a8) {
            return super.qux("bar" + a8);
        }
    }
    const v12 = new C6();
    var obj = v12;
    obj.foo = "foo";
    return obj.qux("baz") === "foobarbaz";
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
