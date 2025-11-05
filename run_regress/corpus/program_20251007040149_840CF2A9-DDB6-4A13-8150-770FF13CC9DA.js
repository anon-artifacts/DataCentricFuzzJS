function test() {
    var passed = false;
    var _set = WeakMap.prototype.set;
    function f7(a8, a9) {
        passed = true;
    }
    const t6 = WeakMap.prototype;
    t6.set = f7;
    new WeakMap([[{},42]]);
    const t9 = WeakMap.prototype;
    t9.set = _set;
    return passed;
}
if (!test()) {
    const v22 = new Error("Test failed");
    throw v22;
}
