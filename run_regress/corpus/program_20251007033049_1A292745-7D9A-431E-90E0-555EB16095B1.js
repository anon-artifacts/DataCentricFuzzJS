function test() {
    var a = Array(...[,,]);
    return (("0" in a) && ("1" in a)) && ((("" + a[0]) + a[1]) === "undefinedundefined");
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
