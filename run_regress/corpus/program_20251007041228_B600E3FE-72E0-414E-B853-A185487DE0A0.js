function test() {
    var prop = Object.getOwnPropertyDescriptor(Promise, Symbol.species);
    return ("get" in prop) && (Promise[Symbol.species] === Promise);
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
