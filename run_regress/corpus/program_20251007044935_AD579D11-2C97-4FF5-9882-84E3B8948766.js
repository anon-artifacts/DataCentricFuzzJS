function test() {
    var a = [];
    var b = [];
    b[Symbol.isConcatSpreadable] = false;
    return (a = a.concat(b))[0] === b;
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
