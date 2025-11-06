function test() {
    const v1 = [];
    const v4 = { __proto__: v1 } instanceof Array;
    return v4 && !({ __proto__: null } instanceof Object);
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
