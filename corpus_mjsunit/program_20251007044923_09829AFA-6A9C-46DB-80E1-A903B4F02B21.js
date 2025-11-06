function test() {
    var prop = Object.getOwnPropertyDescriptor(Array, Symbol.species);
    return ("get" in prop) && (Array[Symbol.species] === Array);
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
