function test() {
    class C2 extends RegExp {
    }
    const v5 = new C2("baz", "g");
    var r = v5;
    return ((r instanceof C2) && (r instanceof RegExp)) && (Object.getPrototypeOf(C2) === RegExp);
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
