function test() {
    var prop = Object.getOwnPropertyDescriptor(Set, Symbol.species);
    return ("get" in prop) && (Set[Symbol.species] === Set);
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
