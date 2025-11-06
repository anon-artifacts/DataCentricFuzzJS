function assert(a1) {
}
const v2 = () => {
    let p = Object.getOwnPropertyDescriptor(BigInt, "asUintN");
    p.enumerable === false;
    p.configurable === true;
    p.writable === true;
};
v2();
const v18 = () => {
    let p = Object.getOwnPropertyDescriptor(BigInt, "asIntN");
    p.enumerable === false;
    p.configurable === true;
    p.writable === true;
};
v18();
