function test() {
    return ((typeof String.prototype.normalize === "function") && (("ḉ").normalize("NFC") === "ḉ")) && (("ḉ").normalize("NFD") === "ḉ");
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
