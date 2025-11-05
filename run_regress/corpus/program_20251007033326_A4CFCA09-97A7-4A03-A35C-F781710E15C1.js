function test() {
    return (Array.from({ 0: "foo", 1: "bar", length: 2 }) + "") === "foo,bar";
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
