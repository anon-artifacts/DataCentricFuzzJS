function f0() {
}
const v1 = () => {
    let v3;
    try { v3 = ArrayBuffer(); } catch (e) {}
    return v3;
};
v1();
const v6 = () => {
    let v9;
    try { v9 = ArrayBuffer(1); } catch (e) {}
    return v9;
};
v6();
const v11 = () => {
    let v14;
    try { v14 = ArrayBuffer.call(null); } catch (e) {}
    return v14;
};
v11();
const v16 = () => {
    const v18 = [];
    let v20;
    try { v20 = ArrayBuffer.apply(null, v18); } catch (e) {}
    return v20;
};
v16();
const v22 = () => {
    const v25 = [];
    let v27;
    try { v27 = Reflect.apply(ArrayBuffer, null, v25); } catch (e) {}
    return v27;
};
v22();
if (typeof f0 === "function") {
    f0(0, 0, "OK");
}
