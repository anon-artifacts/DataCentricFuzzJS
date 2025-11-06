function test() {
    const v3 = ctypes.int32_t;
    let test_struct = ctypes.StructType("test_struct", [{ x: v3 }]);
    let struct_val = test_struct();
    const v10 = () => {
        ctypes.int32_t.ptr("foo");
    };
    v10();
    const v16 = () => {
        const t9 = test_struct.ptr();
        t9.value = "foo";
    };
    v16();
    const v21 = () => {
        const v22 = {};
        const t15 = test_struct.ptr();
        t15.value = v22;
    };
    v21();
    const v26 = () => {
        const v29 = [1,2];
        const t21 = test_struct.ptr();
        t21.value = v29;
    };
    v26();
    const v33 = () => {
        const v38 = new Int8Array([1,2]);
        const t27 = test_struct.ptr();
        t27.value = v38;
    };
    v33();
    const v42 = () => {
        const v43 = {};
        const t33 = ctypes.int32_t().address();
        t33.contents = v43;
    };
    v42();
}
if (typeof ctypes === "object") {
    test();
}
