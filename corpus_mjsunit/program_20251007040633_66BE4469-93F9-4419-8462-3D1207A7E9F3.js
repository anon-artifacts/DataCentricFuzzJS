function test() {
    return Reflect.has({ qux: 987 }, "qux");
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
