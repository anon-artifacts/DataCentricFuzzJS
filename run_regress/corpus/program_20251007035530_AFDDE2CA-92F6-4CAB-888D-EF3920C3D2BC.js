class C1 {
    static set d(a3) {
        super[a3] = a3;
    }
    set h(a5) {
        super.d = 15;
    }
}
const v10 = Uint8Array.__proto__;
try { v10(); } catch (e) {}
for (const v23 of [RegExp,Array]) {
    const v24 = v23.rightContext;
    function f25() {
        v23[Symbol.species] = undefined;
        return v24;
    }
    f25();
}
function f29(a30) {
    Object.getOwnPropertyDescriptor().get;
}
