function test() {
    function* f1() {
        yield "foo";
        yield "bar";
        yield "bal";
    }
    var iterable = f1();
    function f10(a11, a12) {
        return (a11 + this.baz) + a12;
    }
    return (Array.from(iterable, f10, { baz: "d" }) + "") === "food0,bard1,bald2";
}
if (!test()) {
    const v29 = new Error("Test failed");
    throw v29;
}
