function test() {
    var obj = {};
    const v4 = new Set();
    var set = v4;
    set.add(123);
    set.add(123);
    set.add(456);
    return set.size === 2;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
