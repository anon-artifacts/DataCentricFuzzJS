function test() {
    return typeof RegExp.prototype[Symbol.match] === "function";
}
if (!test()) {
    const v13 = new Error("Test failed");
    throw v13;
}
