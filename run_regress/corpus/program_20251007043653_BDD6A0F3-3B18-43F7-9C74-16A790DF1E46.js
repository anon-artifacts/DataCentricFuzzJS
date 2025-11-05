var target = {};
Object.defineProperty(target, "foo", { configurable: true });
const v7 = () => {
    return undefined;
};
var handler = { getOwnPropertyDescriptor: v7 };
const v12 = new Proxy(target, handler);
for (const v16 of [v12,Proxy.revocable(target, handler).proxy]) {
    Object.getOwnPropertyDescriptor(v16, "foo");
}
