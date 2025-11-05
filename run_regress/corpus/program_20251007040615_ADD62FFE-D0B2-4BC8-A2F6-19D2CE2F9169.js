function test() {
    return (typeof Array.of === "function") && (Array.of(2)[0] === 2);
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
