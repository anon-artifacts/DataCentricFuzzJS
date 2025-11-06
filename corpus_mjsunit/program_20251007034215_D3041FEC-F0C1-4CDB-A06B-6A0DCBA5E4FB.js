function test(a1) {
    const t1 = Array.prototype;
    t1[Symbol.iterator] = a1;
    function f6() {
        for (const v8 of []) {
        }
    }
    try { f6(); } catch (e) {}
}
test(undefined);
test(null);
test({});
