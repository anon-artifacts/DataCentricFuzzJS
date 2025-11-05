function test() {
    return (("𐐘").toLowerCase() === "𐑀") && (("𐑀").toUpperCase() === "𐐘");
}
if (!test()) {
    const v14 = new Error("Test failed");
    throw v14;
}
