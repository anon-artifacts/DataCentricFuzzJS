function test() {
    const v1 = () => {
        ctypes.cast();
    };
    v1();
    const v6 = () => {
        ctypes.getRuntime();
    };
    v6();
}
if (typeof ctypes === "object") {
    test();
}
