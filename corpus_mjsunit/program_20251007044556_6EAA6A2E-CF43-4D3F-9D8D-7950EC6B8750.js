function f0() {
}
var sym = Symbol();
const v4 = () => {
    let v5;
    try { v5 = sym(); } catch (e) {}
    return v5;
};
v4();
const v8 = () => {
    const v11 = Function.prototype.call;
    let v12;
    try { v12 = v11.call(sym); } catch (e) {}
    return v12;
};
v8();
const v14 = () => {
    let v15;
    try { v15 = new sym(); } catch (e) {}
    return v15;
};
v14();
const v17 = () => {
    let v18;
    try { v18 = new Symbol(); } catch (e) {}
    return v18;
};
v17();
if (typeof f0 === "function") {
    f0(0, 0);
}
