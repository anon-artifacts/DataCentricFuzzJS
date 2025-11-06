function test() {
    return ([...[1,2,3]])[2] === 3;
}
if (!test()) {
    const v13 = new Error("Test failed");
    throw v13;
}
