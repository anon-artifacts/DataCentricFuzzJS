function test() {
    if (getBuildConfiguration()["pointer-byte-size"] == 4) {
        let big_array = ctypes.int32_t.array(268435455);
        const v12 = () => {
            const v14 = { a: big_array };
            const v15 = { b: big_array };
            const v16 = { c: big_array };
            const v17 = { d: big_array };
            ctypes.StructType("x", [v14,v15,v16,v17,{ e: big_array }]);
        };
        v12();
    } else {
        if (getBuildConfiguration()["pointer-byte-size"] == 8) {
            let big_array = ctypes.int32_t.array(1152921504606846976);
            const v33 = () => {
                const v35 = { a: big_array };
                const v36 = { b: big_array };
                const v37 = { c: big_array };
                const v38 = { d: big_array };
                ctypes.StructType("x", [v35,v36,v37,v38,{ e: big_array }]);
            };
            v33();
        }
    }
}
if (typeof ctypes === "object") {
    test();
}
