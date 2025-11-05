function test() {
    function f1() {
        const v8 = typeof arguments[Symbol.iterator] === "function";
        const v10 = Symbol.iterator;
        return v8 && Object.hasOwnProperty.call(arguments, v10);
    }
    return f1();
}
if (!test()) {
    const v20 = new Error("Test failed");
    throw v20;
}
