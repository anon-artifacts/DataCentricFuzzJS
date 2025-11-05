var target = {};
Object.preventExtensions(target);
const v4 = () => {
    return ["foo"];
};
var handler = { ownKeys: v4 };
const v10 = new Proxy(target, handler);
for (const v14 of [v10,Proxy.revocable(target, handler).proxy]) {
    const v15 = () => {
        let v16;
        try { v16 = Object.getOwnPropertyNames(v14); } catch (e) {}
        return v16;
    };
    v15();
}
