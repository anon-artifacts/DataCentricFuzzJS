function f0(a1, a2, a3) {
    return true;
}
var handler = { defineProperty: f0 };
const v9 = new Proxy({}, handler);
for (const v14 of [v9,Proxy.revocable({}, handler).proxy]) {
    function f15() {
        const v18 = { configurable: false };
        try { Object.defineProperty(v14, "foo", v18); } catch (e) {}
    }
    f15();
}
