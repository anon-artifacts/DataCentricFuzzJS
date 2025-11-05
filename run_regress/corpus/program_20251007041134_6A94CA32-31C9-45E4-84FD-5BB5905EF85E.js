function test() {
    var obj = {};
    const v4 = new Set();
    var set = v4;
    set.add(123);
    set.add(123);
    return set.has(123);
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
