function test() {
    var o = Object.create(null);
    var p = {};
    o.__proto__ = p;
    return Object.getPrototypeOf(o) !== p;
}
if (!test()) {
    const v13 = new Error("Test failed");
    throw v13;
}
