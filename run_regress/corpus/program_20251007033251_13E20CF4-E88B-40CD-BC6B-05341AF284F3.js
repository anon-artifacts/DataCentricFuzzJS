try {
    function f3(a4, a5) {
        if (!a5) {
            a5 = {};
        }
        a5.catchTermination = true;
        let v10;
        try { v10 = fuzzutils.orig_evaluate(a4, a5); } catch (e) {}
        return v10;
    }
    const v11 = { orig_evaluate: evaluate, evaluate: f3 };
    const v12 = { value: v11 };
    try { Object.defineProperty(this, "fuzzutils", v12); } catch (e) {}
    try { gczeal(21, 10); } catch (e) {}
    const v19 = `\nfunction test() {}\n`;
    try { fuzzutils.evaluate(v19); } catch (e) {}
} catch(e22) {
}
