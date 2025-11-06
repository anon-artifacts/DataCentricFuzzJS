function test() {
    const v1 = () => {
        ctypes.int32_t.array.call(1);
    };
    v1();
    const v9 = () => {
        const t6 = ctypes.int32_t.array(10);
        t6().addressOfElement.call(1);
    };
    v9();
    const v20 = () => {
        const v23 = ctypes.int32_t(0);
        const t11 = ctypes.int32_t.array(10);
        t11().addressOfElement.call(v23);
    };
    v20();
}
if (typeof ctypes === "object") {
    test();
}
