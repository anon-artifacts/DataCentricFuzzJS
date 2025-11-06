function test() {
    function* f1() {
        yield 1;
        yield 2;
        yield 3;
    }
    var iterable = f1();
    return (Array.from(iterable) + "") === "1,2,3";
}
if (!test()) {
    const v20 = new Error("Test failed");
    throw v20;
}
