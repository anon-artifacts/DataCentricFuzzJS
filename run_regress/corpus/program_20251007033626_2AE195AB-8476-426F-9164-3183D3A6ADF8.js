const v0 = {};
function f1(a2) {
    return { ...v0, __proto__: v0, c: a2 };
}
f1();
f1();
function f6(a7, a8) {
    const v10 = Symbol.dispose;
    const v12 = {
        [v10]() {
        },
    };
    using v13 = v12;
}
f6(f6, v0);
