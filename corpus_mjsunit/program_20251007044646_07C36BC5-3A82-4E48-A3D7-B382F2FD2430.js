function test() {
    const v1 = () => {
        ctypes.int32_t(1, 2, 3);
    };
    v1();
    const v9 = () => {
        ctypes.int32_t.array(1, 2);
    };
    v9();
}
if (typeof ctypes === "object") {
    test();
}
