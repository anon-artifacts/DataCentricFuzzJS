function test() {
    const v2 = new WeakMap();
    var weakmap = v2;
    var key = {};
    return weakmap.set(key, 0) === weakmap;
}
if (!test()) {
    const v13 = new Error("Test failed");
    throw v13;
}
