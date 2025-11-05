function test() {
    var s = Symbol.toStringTag;
    return (Math[s] === "Math") && (JSON[s] === "JSON");
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
