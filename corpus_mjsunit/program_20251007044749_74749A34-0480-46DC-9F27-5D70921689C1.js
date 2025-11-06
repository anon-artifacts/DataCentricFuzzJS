try {
    function f0() {
    }
    y = "x";
    for (let i4 = 0; i4 < 100; i4++) {
        y += y;
    }
    const v12 = y?.length;
    try { f0(v12); } catch (e) {}
} catch(e14) {
}
