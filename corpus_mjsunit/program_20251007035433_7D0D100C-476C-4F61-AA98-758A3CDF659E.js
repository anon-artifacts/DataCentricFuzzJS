function test() {
    const v3 = ctypes.int32_t(0);
    const v4 = (a5) => {
        return a5;
    };
    let fin = ctypes.CDataFinalizer(v3, ctypes.FunctionType(ctypes.default_abi, ctypes.int32_t, [ctypes.int32_t]).ptr(v4));
    const v14 = () => {
        fin.toSource.call(1);
    };
    v14();
    const v20 = () => {
        fin.toString.call(1);
    };
    v20();
    const v26 = () => {
        fin.forget.call(1);
    };
    v26();
    const v32 = () => {
        fin.dispose.call(1);
    };
    v32();
    fin.forget();
    const v39 = () => {
        fin.readString();
    };
    v39();
    const v43 = () => {
        fin.dispose();
    };
    v43();
    const v47 = () => {
        fin.forget();
    };
    v47();
}
if (typeof ctypes === "object") {
    test();
}
