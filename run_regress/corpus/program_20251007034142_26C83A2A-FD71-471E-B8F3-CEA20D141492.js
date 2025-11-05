class C2 {
    d = WeakSet;
    #c = 0n;
}
const v3 = new C2();
function f4(a5, a6, a7) {
    const v13 = {
        ...v3,
        __proto__: v3,
        m(a9, a10, a11, a12) {
            return a12;
        },
    };
    return a6;
}
f4();
f4();
