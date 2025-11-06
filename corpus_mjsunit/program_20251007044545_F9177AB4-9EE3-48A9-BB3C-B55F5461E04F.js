function test() {
    var symbol = Symbol.for("foo");
    return (Symbol.for("foo") === symbol) && (Symbol.keyFor(symbol) === "foo");
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
