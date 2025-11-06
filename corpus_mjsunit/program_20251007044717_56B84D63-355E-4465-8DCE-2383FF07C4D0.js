function test() {
    return (/\x1/.exec("x1")[0] === "x1") && (/[\x1]/.exec("x")[0] === "x");
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
