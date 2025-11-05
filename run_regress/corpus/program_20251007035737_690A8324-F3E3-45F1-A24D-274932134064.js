function f0() {
    const v5 = {
        apply_(a2, a3) {
            return a2 + a3;
        },
    };
    let o = v5;
    let result = 0;
    for (let i10 = 0; i10 < 10000000; ++i10) {
        result = o.apply_(result, 1);
    }
    if (result != 10000000) {
        const t12 = "Bad result: ";
        const v21 = new t12();
        throw v21 + result;
    }
}
f0();
