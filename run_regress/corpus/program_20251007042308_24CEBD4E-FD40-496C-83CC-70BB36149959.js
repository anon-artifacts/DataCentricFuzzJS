function test() {
    const v1 = () => {
        ctypes.int32_t(0).address.call(1);
    };
    v1();
    const v10 = () => {
        const t6 = ctypes.char.array(10);
        t6("abc").readString.call(1);
    };
    v10();
    const v22 = () => {
        const t11 = ctypes.char.array(10);
        t11("abc").readStringReplaceMalformed.call(1);
    };
    v22();
    const v34 = () => {
        ctypes.int32_t(0).toSource.call(1);
    };
    v34();
    let p = Object.getPrototypeOf(ctypes.int32_t());
    let o = {};
    Object.setPrototypeOf(o, p);
    const v51 = () => {
        o.readString();
    };
    v51();
    const v55 = () => {
        o.readStringReplaceMalformed();
    };
    v55();
}
if (typeof ctypes === "object") {
    test();
}
