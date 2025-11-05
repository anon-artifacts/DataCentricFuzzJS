var target = {};
Object.preventExtensions(target);
function f4(a5, a6, a7) {
    return true;
}
var handler = { defineProperty: f4 };
const v12 = new Proxy(target, handler);
for (const v16 of [v12,Proxy.revocable(target, handler).proxy]) {
    function f17() {
        const v20 = { configurable: true };
        try { Object.defineProperty(v16, "foo", v20); } catch (e) {}
    }
    f17();
}
