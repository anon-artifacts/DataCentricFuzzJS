function test() {
    const v1 = () => {
        ctypes.PointerType({});
    };
    v1();
}
if (typeof ctypes === "object") {
    test();
}
