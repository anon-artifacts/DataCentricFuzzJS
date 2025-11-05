function test() {
    return Math.max(...[1,2,3]) === 3;
}
if (!test()) {
    const v13 = new Error("Test failed");
    throw v13;
}
