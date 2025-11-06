function test() {
    return Object.isExtensible("a") === false;
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
