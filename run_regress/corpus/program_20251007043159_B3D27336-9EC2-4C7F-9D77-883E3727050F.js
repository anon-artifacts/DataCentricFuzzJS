function test() {
    var obj = [];
    obj.constructor = {};
    function f4() {
        return { foo: 1 };
    }
    const t6 = obj.constructor;
    t6[Symbol.species] = f4;
    return Array.prototype.slice.call(obj, 0).foo === 1;
}
if (!test()) {
    const v22 = new Error("Test failed");
    throw v22;
}
