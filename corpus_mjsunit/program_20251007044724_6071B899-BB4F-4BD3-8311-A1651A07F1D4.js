function f0() {
    const v7 = {
        g: NaN,
        [f0]: 2.2250738585072014e-308,
        e: NaN,
        f: "toString",
        h: "toString",
        [2.2250738585072014e-308]: "toString",
        valueOf(a5, a6) {
            super.a ^= NaN;
            return 2.2250738585072014e-308;
        },
        h: "toString",
        f: "toString",
        ..."toString",
    };
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
