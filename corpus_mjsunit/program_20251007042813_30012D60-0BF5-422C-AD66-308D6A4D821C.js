function test() {
    return Object.freeze("a") === "a";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
