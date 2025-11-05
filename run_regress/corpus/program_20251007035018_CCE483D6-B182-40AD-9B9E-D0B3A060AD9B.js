function test() {
    const v3 = { a: 1, x: 2 };
    const v6 = [3,4];
    const v13 = new Function("{a, x:b, y:e}", "[c, d]", "return a === 1 && b === 2 && c === 3 && " + "d === 4 && e === undefined;");
    return v13(v3, v6);
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
