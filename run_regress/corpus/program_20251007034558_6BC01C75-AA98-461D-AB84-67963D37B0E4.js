function test() {
    class C2 extends Function {
    }
    const v4 = new C2("return 'foo';");
    var c = v4;
    return ((c instanceof C2) && (c instanceof Function)) && (Object.getPrototypeOf(C2) === Function);
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
