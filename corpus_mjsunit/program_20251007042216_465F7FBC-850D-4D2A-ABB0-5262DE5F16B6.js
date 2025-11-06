function test() {
    const v1 = () => {
        ctypes.Int64("0xfffffffffffffffffffffff");
    };
    v1();
    const v7 = () => {
        ctypes.Int64.join("foo", 0);
    };
    v7();
    const v15 = () => {
        ctypes.Int64.join(0, "foo");
    };
    v15();
    const v23 = () => {
        ctypes.UInt64("0xfffffffffffffffffffffff");
    };
    v23();
    const v29 = () => {
        ctypes.UInt64.join("foo", 0);
    };
    v29();
    const v37 = () => {
        ctypes.UInt64.join(0, "foo");
    };
    v37();
}
if (typeof ctypes === "object") {
    test();
}
