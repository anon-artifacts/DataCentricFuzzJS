function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 {
    constructor(a6, a7, a8, a9) {
        const v10 = { deleteProperty: Date };
        const v11 = v10.deleteProperty;
        try { new v11(F0, v10, F0, v10, a6); } catch (e) {}
    }
}
new C4(40945n);
