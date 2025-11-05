function f1(a2) {
    return -1073741824;
}
function f5(a6, a7, a8, a9) {
    const v11 = {
        __proto__: "bigint",
        ["bigint"]: f1,
        d: f1,
        h: "bigint",
        a: -1073741824,
        get g() {
            return this;
        },
        b: "object",
        e: a7,
        f: a6,
        c: a6,
    };
    return a9;
}
f5(-1073741824, "bigint", f5("object", f5, f5, "object"), f1);
%OptimizeFunctionOnNextCall(f5);
f5();
