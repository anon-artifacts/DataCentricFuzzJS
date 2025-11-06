function test() {
    const v1 = () => {
        ctypes.StructType("a").define.call(1);
    };
    v1();
    const v10 = () => {
        const v12 = ctypes.int32_t;
        ctypes.StructType("a").define.call(v12);
    };
    v10();
    const v21 = ctypes.int32_t;
    const t11 = ctypes.StructType("a", [{ x: v21 }]);
    let p = Object.getPrototypeOf(t11());
    let o = {};
    Object.setPrototypeOf(o, p);
    const v32 = () => {
        let a = o.x;
    };
    v32();
    const v37 = () => {
        o.x = 1;
    };
    v37();
    Object.setPrototypeOf(o = ctypes.int32_t(0), p);
    const v44 = () => {
        let a = o.x;
    };
    v44();
    const v49 = () => {
        o.x = 1;
    };
    v49();
    const v53 = () => {
        const t33 = ctypes.StructType("a", []);
        t33().addressOfField.call(1);
    };
    v53();
    const v63 = () => {
        const v65 = ctypes.int32_t(0);
        const t38 = ctypes.StructType("a", []);
        t38().addressOfField.call(v65);
    };
    v63();
}
if (typeof ctypes === "object") {
    test();
}
