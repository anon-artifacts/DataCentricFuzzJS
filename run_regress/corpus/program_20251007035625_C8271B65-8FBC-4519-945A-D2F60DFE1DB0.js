function test() {
    return (/\41/.exec("!")[0] === "!") && (/[\41]/.exec("!")[0] === "!");
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
