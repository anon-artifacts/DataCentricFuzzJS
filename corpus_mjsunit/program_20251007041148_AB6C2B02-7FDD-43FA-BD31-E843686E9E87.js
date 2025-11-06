function test() {
    var key1 = {};
    var key2 = {};
    const v11 = new WeakMap([[key1,123],[key2,456]]);
    var weakmap = v11;
    return ((weakmap.has(key1) && (weakmap.get(key1) === 123)) && weakmap.has(key2)) && (weakmap.get(key2) === 456);
}
if (!test()) {
    const v28 = new Error("Test failed");
    throw v28;
}
