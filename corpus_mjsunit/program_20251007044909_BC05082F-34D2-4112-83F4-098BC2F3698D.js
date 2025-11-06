function test() {
    const v1 = () => {
        const t2 = ctypes.int32_t.array();
        t2("foo");
    };
    v1();
    const v9 = () => {
        const t7 = ctypes.int32_t.array(10);
        t7("foo");
    };
    v9();
    const v18 = () => {
        const t12 = ctypes.char.array(2);
        t12("foo");
    };
    v18();
    const v27 = () => {
        const t17 = ctypes.char16_t.array(2);
        t17("foo");
    };
    v27();
    const v36 = () => {
        const v39 = new ArrayBuffer(8);
        const t23 = ctypes.int8_t.array(2);
        t23(v39);
    };
    v36();
    const v47 = () => {
        const v50 = new Int8Array(8);
        const t29 = ctypes.int8_t.array(2);
        t29(v50);
    };
    v47();
    const v58 = () => {
        const t34 = ctypes.int32_t.array(10);
        const t35 = t34();
        t35[0] = "foo";
    };
    v58();
    const v67 = () => {
        const t40 = ctypes.int32_t.array(10);
        const t41 = t40();
        t41[1] = "foo";
    };
    v67();
    const v76 = () => {
        const v78 = ["foo"];
        const t46 = ctypes.int32_t.array(1);
        const t48 = t46();
        t48.value = v78;
    };
    v76();
    const v86 = () => {
        const v89 = [2,"foo"];
        const t53 = ctypes.int32_t.array(1);
        const t55 = t53();
        t55.value = v89;
    };
    v86();
    const v97 = () => {
        const v100 = [2,"foo"];
        const t60 = ctypes.int32_t.array(2);
        const t62 = t60();
        t62.value = v100;
    };
    v97();
}
if (typeof ctypes === "object") {
    test();
}
