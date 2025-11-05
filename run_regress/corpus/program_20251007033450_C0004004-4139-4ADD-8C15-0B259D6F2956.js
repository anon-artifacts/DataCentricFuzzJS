function test() {
    const v1 = () => {
        ctypes.FunctionType();
    };
    v1();
    const v6 = () => {
        const v7 = {};
        ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr(v7, 1);
    };
    v6();
}
if (typeof ctypes === "object") {
    test();
}
