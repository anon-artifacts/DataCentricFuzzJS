function f0() {
}
const v3 = { x: true };
const v5 = Symbol.unscopables;
with ({ x: 1, [v5]: v3 }) {
    const v7 = () => {
        return x;
    };
    try { v7(); } catch (e) {}
}
f0(0, 0);
