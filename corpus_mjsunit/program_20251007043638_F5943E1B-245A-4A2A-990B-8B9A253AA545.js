function f0() {
    function getOne(a2) {
        return a2["1"];
    }
    for (let i6 = 0; i6 < 36; ++i6) {
        getOne({ 2: true });
    }
    if (!getOne({ 1: true })) {
        const v21 = new Error("OUT");
        throw v21;
    }
    for (let i23 = 0; i23 < 10000; ++i23) {
        getOne({ 2: true });
    }
    if (!getOne({ 1: true })) {
        const v38 = new Error("OUT");
        throw v38;
    }
}
f0();
