function test() {
    return String(Symbol("foo")) === "Symbol(foo)";
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
