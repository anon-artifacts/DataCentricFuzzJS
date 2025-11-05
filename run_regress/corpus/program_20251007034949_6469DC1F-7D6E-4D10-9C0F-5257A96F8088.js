function test() {
    function f() {
    }
    var descriptor = Object.getOwnPropertyDescriptor(f, "name");
    return ((descriptor.enumerable === false) && (descriptor.writable === false)) && (descriptor.configurable === true);
}
if (!test()) {
    const v21 = new Error("Test failed");
    throw v21;
}
