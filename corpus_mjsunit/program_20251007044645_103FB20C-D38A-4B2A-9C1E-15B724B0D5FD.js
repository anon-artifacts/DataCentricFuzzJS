function test() {
    class C1 {
    }
    return typeof C1 === "function";
}
if (!test()) {
    const v9 = new Error("Test failed");
    throw v9;
}
