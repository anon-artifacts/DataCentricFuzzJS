async function* f0() {
    return f0;
}
const v1 = f0();
const v2 = v1.next(v1);
try { v2.constructor(v2, f0); } catch (e) {}
