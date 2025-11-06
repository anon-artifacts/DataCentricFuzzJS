function test() {
    function* f1() {
        yield 1;
        yield 2;
        yield 3;
    }
    var iterable = f1();
    return Math.max(...iterable) === 3;
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
