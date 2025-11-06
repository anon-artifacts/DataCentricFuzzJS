function test() {
    class C2 extends Function {
    }
    const v5 = new C2("x", "return this.bar + x;");
    var c = v5;
    return c.apply({ bar: 1 }, [2]) === 3;
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
