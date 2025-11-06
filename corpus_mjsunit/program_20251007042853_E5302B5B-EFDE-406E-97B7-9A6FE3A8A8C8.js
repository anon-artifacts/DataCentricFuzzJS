function test() {
    var obj1 = {};
    var obj2 = {};
    const v7 = new Set([obj1,obj2]);
    var set = v7;
    return set.has(obj1) && set.has(obj2);
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
