function test() {
    const v3 = {
        y() {
            return 2;
        },
    };
    return v3.y() === 2;
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
