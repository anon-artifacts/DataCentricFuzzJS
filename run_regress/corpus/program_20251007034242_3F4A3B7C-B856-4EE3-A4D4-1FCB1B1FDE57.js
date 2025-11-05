function test() {
    var obj1 = {};
    var obj2 = {};
    const v7 = new WeakSet([obj1,obj2]);
    var weakset = v7;
    return weakset.has(obj1) && weakset.has(obj2);
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
