function test() {
    do {
    } while (false)
    return true;
}
if (!test()) {
    const v7 = new Error("Test failed");
    throw v7;
}
