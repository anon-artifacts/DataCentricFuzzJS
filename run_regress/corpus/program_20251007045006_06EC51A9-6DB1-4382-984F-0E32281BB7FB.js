function test() {
    const v2 = {
        foo() {
        },
    };
    var o = v2;
    return o.foo.name === "foo";
}
if (!test()) {
    const v12 = new Error("Test failed");
    throw v12;
}
