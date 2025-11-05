function test() {
    if (!("clear" in WeakMap.prototype)) {
        return true;
    }
    const v7 = new WeakMap();
    var m = v7;
    var key = {};
    m.set(key, 2);
    m.clear();
    return m.has(key);
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
