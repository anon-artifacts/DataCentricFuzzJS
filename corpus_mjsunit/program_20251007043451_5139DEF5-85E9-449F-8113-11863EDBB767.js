function test() {
    const v1 = () => {
        ctypes.CDataFinalizer(1);
    };
    v1();
    const v9 = ctypes.int32_t(0);
    const v10 = (a11) => {
        return a11;
    };
    let fin = ctypes.CDataFinalizer(v9, ctypes.FunctionType(ctypes.default_abi, ctypes.int32_t, [ctypes.int32_t]).ptr(v10));
    const v20 = () => {
        fin.forget(1);
    };
    v20();
    const v25 = () => {
        fin.dispose(1);
    };
    v25();
    fin.forget();
}
if (typeof ctypes === "object") {
    test();
}
