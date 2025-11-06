function f0() {
    return f0;
}
const v3 = Array(10, f0);
Object.defineProperty(v3, 9, { value: 1 });
try { v3.sort(); } catch (e) {}
