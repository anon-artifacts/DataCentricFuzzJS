function test() {
    var a = 7;
    var b = 8;
    var c = { a: a, b: b };
    return (c.a === 7) && (c.b === 8);
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
