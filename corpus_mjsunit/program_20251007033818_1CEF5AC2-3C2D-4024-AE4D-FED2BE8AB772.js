function test() {
    var passed = false;
    var _add = WeakSet.prototype.add;
    function f7(a8) {
        passed = true;
    }
    const t6 = WeakSet.prototype;
    t6.add = f7;
    new WeakSet([{}]);
    const t9 = WeakSet.prototype;
    t9.add = _add;
    return passed;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
