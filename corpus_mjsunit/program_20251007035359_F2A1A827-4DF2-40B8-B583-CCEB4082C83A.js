function test() {
    let func_type = ctypes.FunctionType(ctypes.default_abi, ctypes.voidptr_t, [ctypes.int32_t]).ptr;
    function f9() {
    }
    let f1 = func_type(f9);
    const v12 = () => {
        f1("foo");
    };
    v12();
    /can't pass the string "foo" to argument 1 of ctypes\.FunctionType\(ctypes\.default_abi, ctypes\.voidptr_t, \[ctypes\.int32_t\]\)\.ptr\(ctypes\.UInt64\("[x0-9A-Fa-f]+"\)\)/;
    const v18 = ctypes.int32_t;
    let test_struct = ctypes.StructType("test_struct", [{ x: v18 }]);
    let func_type2 = ctypes.FunctionType(ctypes.default_abi, ctypes.int32_t, [test_struct]).ptr;
    function f29() {
    }
    let f2 = func_type2(f29);
    const v32 = () => {
        f2({ x: "foo" });
    };
    v32();
    /can't convert the string \"foo\" to the 'x' field \(int32_t\) of test_struct at argument 1 of ctypes\.FunctionType\(ctypes\.default_abi, ctypes.int32_t, \[test_struct\]\)\.ptr\(ctypes\.UInt64\(\"[x0-9A-Fa-f]+\"\)\)/;
    const v38 = () => {
        f2({ x: "foo", y: "bar" });
    };
    v38();
    /property count of the object \(\{x:\"foo\", y:\"bar\"\}\) does not match to field count of the type test_struct \(expected 1, got 2\) at argument 1 of ctypes\.FunctionType\(ctypes\.default_abi, ctypes\.int32_t, \[test_struct\]\)\.ptr\(ctypes\.UInt64\(\"[x0-9A-Fa-f]+\"\)\)/;
    const v45 = () => {
        f2({ 0: "foo" });
    };
    v45();
    /property name the number 0 of the object \(\{0:\"foo\"\}\) is not a string at argument 1 of ctypes\.FunctionType\(ctypes\.default_abi, ctypes\.int32_t, \[test_struct\]\)\.ptr\(ctypes\.UInt64\(\"[x0-9A-Fa-f]+\"\)\)/;
    const v51 = () => {
        function f52() {
        }
        func_type(f52, null, "foo");
    };
    v51();
}
if (typeof ctypes === "object") {
    test();
}
