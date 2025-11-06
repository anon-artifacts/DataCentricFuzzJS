function test() {
    return Array(..."𠮷𠮶")[0] === "𠮷";
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
