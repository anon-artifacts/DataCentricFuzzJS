function test() {
    let lib;
    try {
        lib = ctypes.open(ctypes.libraryName("m"));
    } catch(e7) {
    }
    if (!lib) {
        return;
    }
    let func = lib.declare("hypot", ctypes.default_abi, ctypes.double, ctypes.double, ctypes.double);
    const v17 = () => {
        func(1, "xyzzy");
    };
    v17();
    const v24 = ctypes.int32_t;
    let test_struct = ctypes.StructType("test_struct", [{ x: v24 }]);
    let test_func = ctypes.FunctionType(ctypes.default_abi, ctypes.voidptr_t, [ctypes.int32_t]).ptr;
    func = lib.declare("hypot", ctypes.default_abi, ctypes.double, ctypes.double, ctypes.int32_t.ptr.ptr.ptr.array(), test_struct, test_struct.ptr.ptr, test_func, test_func.ptr.ptr.ptr, "...");
    const v52 = () => {
        func("xyzzy", 1, 2, 3, 4, 5);
    };
    v52();
}
if (typeof ctypes === "object") {
    test();
}
