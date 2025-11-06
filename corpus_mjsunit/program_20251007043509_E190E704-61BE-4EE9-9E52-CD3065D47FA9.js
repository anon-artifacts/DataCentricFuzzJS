function test() {
    const v3 = {
        toSource() {
            throw 1;
        },
    };
    let obj = v3;
    const v5 = () => {
        const t8 = ctypes.double();
        t8.value = obj;
    };
    v5();
}
if (typeof ctypes === "object") {
    test();
}
