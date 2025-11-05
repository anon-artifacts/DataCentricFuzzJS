function test() {
    function f1(a2, a3) {
    }
    var fn = f1;
    var desc = Object.getOwnPropertyDescriptor(fn, "length");
    if (desc.configurable) {
        Object.defineProperty(fn, "length", { value: 1 });
        return fn.length === 1;
    }
    return false;
}
if (!test()) {
    const v22 = new Error("Test failed");
    throw v22;
}
