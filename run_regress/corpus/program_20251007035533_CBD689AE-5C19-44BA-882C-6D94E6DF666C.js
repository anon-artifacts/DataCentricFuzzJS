function test() {
    const v3 = ctypes.int32_t;
    const t2 = ctypes.StructType("a", [{ x: v3 }]);
    let strcut = t2();
    for (const v19 of [1,,null,false,{},[],Symbol("foo")]) {
        const v20 = () => {
            struct.addressOfField(v19);
        };
        v20();
    }
}
if (typeof ctypes === "object") {
    test();
}
