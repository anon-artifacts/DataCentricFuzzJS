function test() {
    var s = Object.keys("a");
    return (s.length === 1) && (s[0] === "0");
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
