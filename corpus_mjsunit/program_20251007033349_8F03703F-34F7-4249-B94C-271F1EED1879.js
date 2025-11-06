function f0() {
    const v4 = {
        ..."function",
        e: 9,
        f: 9,
        get a() {
        },
        c: 9,
        __proto__: "function",
    };
    return v4;
}
const v5 = f0();
const v6 = f0();
function f8(a9, a10) {
    const v14 = {
        __proto__: a9,
        g: a9,
        0: v5,
        toString: f0,
        b: v5,
        [a10]: a9,
        [Array](a12, a13) {
        },
    };
}
f8(v6);
f8(v5);
f8(v6);
