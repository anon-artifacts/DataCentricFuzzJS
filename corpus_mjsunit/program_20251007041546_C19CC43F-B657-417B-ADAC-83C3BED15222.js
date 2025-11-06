var target = {};
Object.defineProperty(target, "foo", { configurable: true });
Object.preventExtensions(target);
const v8 = () => {
    return false;
};
var handler = { has: v8 };
const v13 = new Proxy(target, handler);
for (const v17 of [v13,Proxy.revocable(target, handler).proxy]) {
    function f18() {
        "foo" in v17;
    }
    try { f18(); } catch (e) {}
}
