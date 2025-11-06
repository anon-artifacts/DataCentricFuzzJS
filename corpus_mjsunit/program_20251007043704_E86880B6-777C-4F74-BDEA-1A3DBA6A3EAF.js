function test() {
    return (2 === 2) && (2 === 2);
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
