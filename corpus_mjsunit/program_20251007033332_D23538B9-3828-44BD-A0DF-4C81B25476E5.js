function test() {
    const v1 = () => {
        ctypes.cast(ctypes.int32_t(0), ctypes.StructType("foo"));
    };
    v1();
    const v10 = () => {
        const v13 = ctypes.int32_t(0);
        const v15 = ctypes.int32_t;
        const v16 = { x: v15 };
        const v17 = ctypes.int32_t;
        ctypes.cast(v13, ctypes.StructType("foo", [v16,{ y: v17 }]));
    };
    v10();
}
if (typeof ctypes === "object") {
    test();
}
