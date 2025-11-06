function test() {
    const v6 = new Function("a = 1", "b = 2", "return a === 3 && b === 2;");
    return v6(3);
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
