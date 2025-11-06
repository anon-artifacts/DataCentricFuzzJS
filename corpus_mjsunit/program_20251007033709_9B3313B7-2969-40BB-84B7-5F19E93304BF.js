function test() {
    var result = "";
    function* f3() {
        yield 1;
        yield 2;
        yield 3;
    }
    var iterable = f3();
    for (const v12 of iterable) {
        result += v12;
    }
    return result === "123";
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
