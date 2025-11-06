function f0() {
}
const v1 = (a2) => {
    Object.getPrototypeOf(Object.create(null, a2));
};
([1,"",true,Symbol(),,]).forEach(v1);
const v16 = () => {
    let v20;
    try { v20 = Object.create(null, null); } catch (e) {}
    return v20;
};
v16();
if (typeof f0 === "function") {
    f0(true, true);
}
