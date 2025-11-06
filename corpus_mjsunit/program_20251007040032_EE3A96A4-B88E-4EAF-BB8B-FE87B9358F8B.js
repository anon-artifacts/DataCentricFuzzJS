function test() {
    return Object.prototype.hasOwnProperty("__proto__");
}
if (!test()) {
    const v9 = new Error("Test failed");
    throw v9;
}
