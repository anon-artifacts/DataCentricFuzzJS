function C() {
    Object.defineProperty(this, 0, { value: "v", configurable: false });
}
const v8 = () => {
    const v13 = Array.of;
    let v14;
    try { v14 = v13.call(C, 1, 2, 3); } catch (e) {}
    return v14;
};
v8();
