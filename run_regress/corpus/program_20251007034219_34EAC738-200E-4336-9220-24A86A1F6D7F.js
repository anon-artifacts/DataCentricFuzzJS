function test() {
    const v3 = new Date(NaN);
    return (v3 + "") === "Invalid Date";
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
