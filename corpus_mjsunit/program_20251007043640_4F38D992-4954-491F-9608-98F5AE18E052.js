function test() {
    var key = {};
    class C4 extends Map {
    }
    const v5 = new C4();
    var map = v5;
    map.set(key, 123);
    return map.has(key) && (map.get(key) === 123);
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
