function test() {
    var a = [...[,,]];
    return (("0" in a) && ("1" in a)) && ((("" + a[0]) + a[1]) === "undefinedundefined");
}
if (!test()) {
    const v22 = new Error("Test failed");
    throw v22;
}
