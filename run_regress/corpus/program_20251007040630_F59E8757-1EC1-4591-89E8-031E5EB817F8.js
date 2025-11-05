function test() {
    var o = {};
    o.__proto__ = Array.prototype;
    return o instanceof Array;
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
