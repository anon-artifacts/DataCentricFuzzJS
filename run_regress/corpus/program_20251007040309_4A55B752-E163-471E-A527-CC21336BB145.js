function test() {
    class C2 extends Function {
    }
    const v4 = new C2("this.bar = 2;");
    var c = v4;
    const t5 = c.prototype;
    t5.baz = 3;
    const v8 = new c();
    const v11 = v8.bar === 2;
    const v12 = new c();
    return v11 && (v12.baz === 3);
}
if (!test()) {
    const v21 = new Error("Test failed");
    throw v21;
}
