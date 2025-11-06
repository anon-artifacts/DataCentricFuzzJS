function f0() {
}
const v3 = new ArrayBuffer(12);
var AB = v3;
const v6 = new ArrayBuffer(14);
var BC = v6;
const v8 = () => {
    const v11 = -1;
    let v12;
    try { v12 = new Int32Array(AB, v11); } catch (e) {}
    return v12;
};
v8();
const v15 = () => {
    let v18;
    try { v18 = new Int32Array(AB, 2); } catch (e) {}
    return v18;
};
v15();
const v20 = () => {
    let v22;
    try { v22 = new Int32Array(BC); } catch (e) {}
    return v22;
};
v20();
const v24 = () => {
    let v27;
    try { v27 = new Int32Array(AB, 16); } catch (e) {}
    return v27;
};
v24();
const v29 = () => {
    let v33;
    try { v33 = new Int32Array(AB, 0, 4); } catch (e) {}
    return v33;
};
v29();
if (typeof f0 === "function") {
    f0(true, true);
}
