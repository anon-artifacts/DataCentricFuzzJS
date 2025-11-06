var obj = {};
for (let i3 = 0; i3 < 100; i3++) {
    const v10 = "x" + i3;
    Object.defineProperty(obj, v10, { value: 31415 });
    const v16 = "y" + i3;
    function f17() {
        return 42;
    }
    function f19(a20) {
    }
    Object.defineProperty(obj, v16, { get: f17, set: f19 });
}
