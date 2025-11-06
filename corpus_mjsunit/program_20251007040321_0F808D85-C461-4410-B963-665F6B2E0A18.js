function test() {
    var passed = false;
    var _add = Set.prototype.add;
    function f7(a8) {
        passed = true;
    }
    const t6 = Set.prototype;
    t6.add = f7;
    new Set([1]);
    const t9 = Set.prototype;
    t9.add = _add;
    return passed;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
