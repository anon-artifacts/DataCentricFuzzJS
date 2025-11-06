function test() {
    return ([..."𠮷𠮶"])[0] === "𠮷";
}
if (!test()) {
    const v10 = new Error("Test failed");
    throw v10;
}
