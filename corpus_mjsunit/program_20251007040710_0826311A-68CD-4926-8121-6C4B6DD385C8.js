function test() {
    var x = "y";
    return ({ [x]: 1 }).y === 1;
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
