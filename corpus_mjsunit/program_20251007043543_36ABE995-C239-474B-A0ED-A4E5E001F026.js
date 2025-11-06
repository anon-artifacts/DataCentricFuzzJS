function f0() {
}
var desc = Object.getOwnPropertyDescriptor(Array, "from");
desc.configurable;
desc.enumerable;
desc.writable;
Array.from.length;
const v15 = () => {
    const v16 = Array.from;
    let v17;
    try { v17 = new v16(); } catch (e) {}
    return v17;
};
v15();
if (typeof f0 === "function") {
    f0(0, 0);
}
