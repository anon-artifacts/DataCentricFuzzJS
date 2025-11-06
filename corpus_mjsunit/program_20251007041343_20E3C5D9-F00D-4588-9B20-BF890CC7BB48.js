function test() {
    class C2 extends RegExp {
    }
    const v5 = new C2("baz", "g");
    var r = v5;
    return r.global && (r.source === "baz");
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
