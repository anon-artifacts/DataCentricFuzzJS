function test() {
    var a = 3;
    return a === 3;
}
if (!test()) {
    const v9 = new Error("Test failed");
    throw v9;
}
