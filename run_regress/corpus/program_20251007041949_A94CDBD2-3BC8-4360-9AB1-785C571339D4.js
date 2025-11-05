function test() {
    const v1 = () => {
        ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(1);
    };
    v1();
    const v11 = () => {
        const v14 = ctypes.int32_t(0);
        ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(v14);
    };
    v11();
    const v22 = () => {
        const v26 = ctypes.int32_t.ptr(0);
        ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(v26);
    };
    v22();
}
if (typeof ctypes === "object") {
    test();
}
