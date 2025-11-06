function test() {
    const v4 = { 0: "foo", 1: "bar", length: 2 };
    function f5(a6, a7) {
        return (a6 + this.baz) + a7;
    }
    return (Array.from(v4, f5, { baz: "d" }) + "") === "food0,bard1";
}
if (!test()) {
    const v24 = new Error("Test failed");
    throw v24;
}
