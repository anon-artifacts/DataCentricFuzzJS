function test() {
    const v1 = () => {
        ctypes.Int64(0).toString("a");
    };
    v1();
    const v9 = () => {
        ctypes.Int64.compare(1, 2);
    };
    v9();
    const v17 = () => {
        const v20 = ctypes.Int64(0);
        ctypes.Int64.compare(v20, 2);
    };
    v17();
    const v26 = () => {
        ctypes.Int64.lo(1);
    };
    v26();
    const v33 = () => {
        ctypes.Int64.hi(1);
    };
    v33();
    const v40 = () => {
        ctypes.UInt64(0).toString("a");
    };
    v40();
    const v48 = () => {
        ctypes.UInt64.compare(1, 2);
    };
    v48();
    const v56 = () => {
        const v59 = ctypes.UInt64(0);
        ctypes.UInt64.compare(v59, 2);
    };
    v56();
    const v65 = () => {
        ctypes.UInt64.lo(1);
    };
    v65();
    const v72 = () => {
        ctypes.UInt64.hi(1);
    };
    v72();
}
if (typeof ctypes === "object") {
    test();
}
