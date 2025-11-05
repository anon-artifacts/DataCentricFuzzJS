var target = {};
Object.preventExtensions(target);
const v4 = () => {
    return {};
};
var handler = { getOwnPropertyDescriptor: v4 };
const v9 = new Proxy(target, handler);
for (const v13 of [v9,Proxy.revocable(target, handler).proxy]) {
    const v14 = () => {
        let v16;
        try { v16 = Object.getOwnPropertyDescriptor(v13, "foo"); } catch (e) {}
        return v16;
    };
    v14();
}
