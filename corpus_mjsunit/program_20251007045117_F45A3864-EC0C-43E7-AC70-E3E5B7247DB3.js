function test() {
    const v8 = new Function("a", "...b", "return b instanceof Array && a+b === 'foobar,baz';");
    return v8("foo", "bar", "baz");
}
if (!test()) {
    const v14 = new Error("Test failed");
    throw v14;
}
