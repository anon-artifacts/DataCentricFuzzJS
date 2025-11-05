function test() {
    function f1(a2, a3, a4) {
        this.qux = (a2 + a3) + a4;
    }
    return Reflect.construct(f1, ["foo","bar","baz"]).qux === "foobarbaz";
}
if (!test()) {
    const v21 = new Error("Test failed");
    throw v21;
}
