function test() {
    var key1 = {};
    var key2 = {};
    const v11 = new Map([[key1,123],[key2,456]]);
    var map = v11;
    return ((map.has(key1) && (map.get(key1) === 123)) && map.has(key2)) && (map.get(key2) === 456);
}
if (!test()) {
    const v28 = new Error("Test failed");
    throw v28;
}
