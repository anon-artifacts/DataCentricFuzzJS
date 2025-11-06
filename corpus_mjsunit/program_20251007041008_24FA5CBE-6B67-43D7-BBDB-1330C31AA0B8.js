function test() {
    return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
