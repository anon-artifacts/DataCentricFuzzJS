function test() {
    return (/x{1/.exec("x{1")[0] === "x{1") && (/x]1/.exec("x]1")[0] === "x]1");
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
