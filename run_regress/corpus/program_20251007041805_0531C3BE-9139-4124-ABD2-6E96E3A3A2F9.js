function test() {
    class C1 {
        constructor(a3) {
            return ["foo" + a3];
        }
    }
    class C7 extends C1 {
        constructor(a9) {
            super("bar" + a9);
            return this;
        }
    }
    const v13 = new C7("baz");
    return v13[0] === "foobarbaz";
}
if (!test()) {
    const v21 = new Error("Test failed");
    throw v21;
}
