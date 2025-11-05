function test() {
    return (typeof String.prototype.startsWith === "function") && ("foobar").startsWith("foo");
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
