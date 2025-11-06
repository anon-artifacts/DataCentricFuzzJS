function test() {
    var baz = false;
    class C3 {
        get foo() {
            return "foo";
        }
        set bar(a7) {
            baz = a7;
        }
    }
    const v9 = new C3();
    v9.bar = true;
    const v10 = new C3();
    return (v10.foo === "foo") && baz;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
