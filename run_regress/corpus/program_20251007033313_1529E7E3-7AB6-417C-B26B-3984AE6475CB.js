function test() {
    var a = "ba";
    var b = "QUX";
    return `foo bar\n${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
