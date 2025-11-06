function test() {
    let foo = 123;
    return foo === 123;
}
if (!test()) {
    const v9 = new Error("Test failed");
    throw v9;
}
