function test() {
    class C1 {
        foo() {
        }
        static bar() {
        }
    }
    return !C1.prototype.propertyIsEnumerable("foo") && !C1.propertyIsEnumerable("bar");
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
