function test() {
    class C1 {
        qux() {
            return "bar";
        }
    }
    class C4 extends C1 {
        qux() {
            return super.qux() + this.corge;
        }
    }
    const v10 = C4.prototype.qux;
    var obj = { qux: v10, corge: "ley" };
    return obj.qux() === "barley";
}
if (!test()) {
    const v21 = new Error("Test failed");
    throw v21;
}
