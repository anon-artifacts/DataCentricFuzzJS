function test() {
    return Object.getPrototypeOf("a").constructor === String;
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
