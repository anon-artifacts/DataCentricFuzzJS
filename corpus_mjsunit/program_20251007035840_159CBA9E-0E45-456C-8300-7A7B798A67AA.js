function test() {
    function* f1() {
        yield "b";
        yield "c";
        yield "d";
    }
    var iterable = f1();
    return (["a",...iterable,"e"])[3] === "d";
}
if (!test()) {
    const v20 = new Error("Test failed");
    throw v20;
}
