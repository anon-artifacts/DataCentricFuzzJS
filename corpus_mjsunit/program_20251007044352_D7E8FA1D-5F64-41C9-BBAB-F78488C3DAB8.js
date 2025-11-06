function test() {
    return Reflect.get({ qux: 987 }, "qux") === 987;
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
