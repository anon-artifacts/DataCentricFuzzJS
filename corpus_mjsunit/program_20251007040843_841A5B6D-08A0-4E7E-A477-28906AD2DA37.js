function test() {
    var obj = {};
    Reflect.set(obj, "quux", 654);
    return obj.quux === 654;
}
if (!test()) {
    const v14 = new Error("Test failed");
    throw v14;
}
