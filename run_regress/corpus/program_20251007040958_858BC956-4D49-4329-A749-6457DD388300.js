function test() {
    function f1() {
        return "foo";
    }
    function f3() {
        return "bar";
    }
    var a = { toString: f1, valueOf: f3 };
    return `${a}` === "foo";
}
if (!test()) {
    const v14 = new Error("Test failed");
    throw v14;
}
