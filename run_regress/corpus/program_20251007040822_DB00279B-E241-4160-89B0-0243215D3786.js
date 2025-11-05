const v0 = [];
for (let v1 = 0; v1 < 5; v1++) {
    v0[v1] = Symbol.for();
}
for (const v6 of [Uint8Array]) {
    const v8 = new v6(v0.length);
    function f9() {
        for (let v10 = 0; v10 < 5; v10++) {
            v8[v10] = v0;
        }
    }
    try { f9(); } catch (e) {}
}
