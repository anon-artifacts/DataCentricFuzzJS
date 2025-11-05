function test() {
    const v1 = () => {
        ctypes.default_abi.toSource.call(1);
    };
    v1();
}
if (typeof ctypes === "object") {
    test();
}
