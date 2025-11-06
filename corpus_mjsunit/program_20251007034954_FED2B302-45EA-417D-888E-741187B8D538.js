function test() {
    const v2 = new Set();
    var set = v2;
    return set.add(0) === set;
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
