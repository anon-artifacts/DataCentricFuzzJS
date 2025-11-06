function assert(a1) {
}
const v2 = () => {
    let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "toString");
    p.enumerable === false;
    p.configurable === true;
    p.writable === true;
};
v2();
const v19 = () => {
    let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "toLocaleString");
    p.enumerable === false;
    p.configurable === true;
    p.writable === true;
};
v19();
const v36 = () => {
    let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "valueOf");
    p.enumerable === false;
    p.configurable === true;
    p.writable === true;
};
v36();
const v53 = () => {
    let p = Object.getOwnPropertyDescriptor(BigInt.prototype, Symbol.toStringTag);
    p.enumerable === false;
    p.configurable === true;
    p.writable === false;
};
v53();
