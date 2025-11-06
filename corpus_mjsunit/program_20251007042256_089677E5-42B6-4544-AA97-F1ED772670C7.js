function test() {
    const v3 = Reflect.isExtensible({});
    return v3 && !Reflect.isExtensible(Object.preventExtensions({}));
}
if (!test()) {
    const v14 = new Error("Test failed");
    throw v14;
}
