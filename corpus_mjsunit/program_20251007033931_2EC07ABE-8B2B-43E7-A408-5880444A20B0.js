function test() {
    const v2 = { a: true };
    const v4 = { b: true };
    var o = Object.assign(v2, v4, { c: true });
    return (("a" in o) && ("b" in o)) && ("c" in o);
}
if (!test()) {
    const v22 = new Error("Test failed");
    throw v22;
}
