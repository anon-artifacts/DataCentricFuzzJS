class C0 {
}
class C1 {
}
const v3 = C0.__proto__;
function f4(a5, a6, a7) {
    if (a6 === Symbol.hasInstance) {
        const v11 = new C1();
        throw v11;
    }
}
const v13 = new Proxy(v3, { get: f4 });
C0.__proto__ = v13;
const v14 = () => {
    const v15 = new C0();
    return v15 instanceof C0;
};
try { v14(); } catch (e) {}
