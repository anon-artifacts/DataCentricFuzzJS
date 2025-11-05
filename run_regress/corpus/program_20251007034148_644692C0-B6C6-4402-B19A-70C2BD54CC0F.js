var target = {};
Object.preventExtensions(target);
const v4 = () => {
    return false;
};
var handler = { has: v4 };
const v9 = new Proxy(target, handler);
for (const v13 of [v9,Proxy.revocable(target, handler).proxy]) {
    "foo" in v13;
    Symbol.iterator in v13;
}
