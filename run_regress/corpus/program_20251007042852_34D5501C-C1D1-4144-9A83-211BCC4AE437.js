function test() {
    const v1 = [];
    if (!({ __proto__: v1 } instanceof Array)) {
        return false;
    }
    var a = "__proto__";
    const v9 = [];
    return !({ [a]: v9 } instanceof Array);
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
