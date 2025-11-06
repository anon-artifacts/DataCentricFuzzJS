function test() {
    const v1 = () => {
        ctypes.StructType(1);
    };
    v1();
    const v7 = () => {
        ctypes.StructType("a", 1);
    };
    v7();
    const v14 = () => {
        ctypes.StructType("a").define(1);
    };
    v14();
    const v22 = () => {
        const v23 = {};
        ctypes.StructType("a").define(v23);
    };
    v22();
    const v30 = () => {
        const v34 = ctypes.int32_t;
        const t20 = ctypes.StructType("a", [{ x: v34 }]);
        t20().addressOfField(1);
    };
    v30();
}
if (typeof ctypes === "object") {
    test();
}
