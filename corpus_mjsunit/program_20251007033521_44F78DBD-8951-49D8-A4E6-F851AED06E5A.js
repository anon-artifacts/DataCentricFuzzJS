function test() {
    const v1 = () => {
        return 5;
    };
    return v1() === 5;
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
