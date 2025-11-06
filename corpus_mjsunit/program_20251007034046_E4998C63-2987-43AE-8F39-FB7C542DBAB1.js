function test() {
    return typeof ArrayBuffer[Symbol.species] === "function";
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
