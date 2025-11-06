function test() {
    var key = {};
    const v4 = new Map();
    var map = v4;
    map.set(key, 123);
    return map.size === 1;
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
