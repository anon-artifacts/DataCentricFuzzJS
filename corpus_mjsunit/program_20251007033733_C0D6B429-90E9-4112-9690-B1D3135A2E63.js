function test() {
    const v1 = () => {
        ctypes.ArrayType();
    };
    v1();
    const v6 = () => {
        const t6 = ctypes.int32_t.array(10);
        t6(1, 2);
    };
    v6();
    const v16 = () => {
        const t11 = ctypes.int32_t.array();
        t11(1, 2);
    };
    v16();
    const v25 = () => {
        const t16 = ctypes.int32_t.array(10);
        t16().addressOfElement();
    };
    v25();
}
if (typeof ctypes === "object") {
    test();
}
