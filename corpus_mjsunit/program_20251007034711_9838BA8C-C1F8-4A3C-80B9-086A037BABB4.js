function test() {
    const v3 = ctypes.int32_t;
    const v4 = { x: v3 };
    const v5 = ctypes.int32_t;
    let test_struct = ctypes.StructType("test_struct", [v4,{ bar: v5 }]);
    const v10 = () => {
        new test_struct("foo");
    };
    v10();
    const v15 = () => {
        new test_struct("foo", "x");
    };
    v15();
    const v21 = () => {
        new test_struct({ x: "foo", bar: 1 });
    };
    v21();
    const v28 = () => {
        new test_struct({ 0: 1, bar: 1 });
    };
    v28();
    let struct_val = test_struct();
    const v37 = () => {
        struct_val.x = "foo";
    };
    v37();
    const v41 = () => {
        struct_val.bar = "foo";
    };
    v41();
    const v45 = () => {
        struct_val.value = { x: "foo" };
    };
    v45();
    const v50 = () => {
        struct_val.value = { x: "foo", bar: 1 };
    };
    v50();
    const v56 = () => {
        struct_val.value = "foo";
    };
    v56();
}
if (typeof ctypes === "object") {
    test();
}
