function f0() {
    const v2 = new Map();
    const m = v2;
    const k = Math.pow(2, 31) - 1;
    m.set(k, 1);
    function foo(a14, a15) {
        return a14.get(a15 | 0);
    }
    foo(m, k);
    foo(m, k);
    foo(m, k);
}
f0();
