var target = {};
Object.defineProperty(target, "foo", { configurable: true });
Object.preventExtensions(target);
const v8 = () => {
    return [];
};
var handler = { ownKeys: v8 };
const v13 = new Proxy(target, handler);
for (const v17 of [v13,Proxy.revocable(target, handler).proxy]) {
    const v18 = () => {
        let v19;
        try { v19 = Object.getOwnPropertyNames(v17); } catch (e) {}
        return v19;
    };
    v18();
}
