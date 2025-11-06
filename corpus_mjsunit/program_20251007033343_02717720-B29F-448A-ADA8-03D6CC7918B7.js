function test() {
    return ("𝌆").match(/\u{1d306}/u)[0].length === 2;
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
