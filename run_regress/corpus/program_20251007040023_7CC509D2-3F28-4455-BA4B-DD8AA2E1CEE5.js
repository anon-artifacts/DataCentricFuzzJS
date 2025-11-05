function test() {
    const v1 = () => {
        ctypes.default_abi.toSource(1);
    };
    v1();
}
if (typeof ctypes === "object") {
    test();
}
