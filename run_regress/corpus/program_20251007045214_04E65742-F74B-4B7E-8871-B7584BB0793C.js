try {
    function f2() {
        this.x = 2;
    }
    const v5 = { set: f2 };
    try { Object.defineProperty(this, "x", v5); } catch (e) {}
    x ^= 1;
} catch(e10) {
}
