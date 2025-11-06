function test() {
    var passed = false;
    class C3 {
        constructor(a5) {
            passed = a5 === "barbaz";
        }
    }
    class C8 extends C3 {
        constructor(a10) {
            super("bar" + a10);
        }
    }
    new C8("baz");
    return passed;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
