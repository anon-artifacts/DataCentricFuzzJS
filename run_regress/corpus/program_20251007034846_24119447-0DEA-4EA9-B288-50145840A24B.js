function test() {
    const v3 = ctypes.voidptr_t;
    let test_struct = ctypes.StructType("test_struct", [{ x: v3 }]);
    const v8 = () => {
        return test_struct().value;
    };
    v8();
    let test_array = ctypes.ArrayType(test_struct);
    const v15 = () => {
        return test_array(10).value;
    };
    v15();
    let test_pointer = ctypes.PointerType(test_struct);
    const v23 = () => {
        return test_pointer(10).value;
    };
    v23();
}
if (typeof ctypes === "object") {
    test();
}
