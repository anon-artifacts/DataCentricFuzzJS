function test() {
    var baz = false;
    class C3 {
        static get foo() {
            return "foo";
        }
        static set bar(a7) {
            baz = a7;
        }
    }
    C3.bar = true;
    return (C3.foo === "foo") && baz;
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
