function test() {
    const v1 = () => {
        ctypes.FunctionType(ctypes.default_abi, ctypes.int32_t, 1);
    };
    v1();
}
if (typeof ctypes === "object") {
    test();
}
