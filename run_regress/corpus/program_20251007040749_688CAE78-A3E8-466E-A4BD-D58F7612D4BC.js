function test() {
    var arr = [,,];
    var count = 0;
    for (const v6 of arr) {
        count += v6 === undefined;
    }
    return count === 2;
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
