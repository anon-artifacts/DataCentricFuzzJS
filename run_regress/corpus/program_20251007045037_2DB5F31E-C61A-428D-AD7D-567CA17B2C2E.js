function test() {
    var passed = false;
    const v3 = {};
    var obj = { constructor: v3 };
    const v10 = RegExp.prototype[Symbol.split];
    obj[Symbol.split] = v10;
    function f12() {
        passed = true;
        return /./;
    }
    const t10 = obj.constructor;
    t10[Symbol.species] = f12;
    ("").split(obj);
    return passed;
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
