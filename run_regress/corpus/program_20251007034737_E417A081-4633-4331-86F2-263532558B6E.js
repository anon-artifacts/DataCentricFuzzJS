function f(a1, a2) {
    return Math.imul(0, Math.imul(a2 | 0, a1 >> 0));
}
for (let i12 = 0; i12 < 2; i12++) {
    try {
        const t5 = f(1 ? 0 : undefined);
        t5();
    } catch(e24) {
    }
}
