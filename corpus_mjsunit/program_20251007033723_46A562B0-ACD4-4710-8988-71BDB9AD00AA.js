class C1 {
    f = 14n;
    e = C1;
    d = 14n;
}
const v2 = new C1();
function f3(a4, a5) {
    const v8 = {
        set e(a7) {
        },
        ...v2,
        __proto__: v2,
        d: a5,
    };
    return C1;
}
f3(C1, f3(f3, 14n));
