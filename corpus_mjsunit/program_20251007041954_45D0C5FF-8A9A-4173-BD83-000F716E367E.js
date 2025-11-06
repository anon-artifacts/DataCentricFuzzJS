function test() {
    return (typeof String.prototype.endsWith === "function") && ("foobar").endsWith("bar");
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
