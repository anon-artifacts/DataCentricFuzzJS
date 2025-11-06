function test() {
    var O = {};
    function f3() {
        return 42;
    }
    O[Symbol.search] = f3;
    return ("").search(O) === 42;
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
