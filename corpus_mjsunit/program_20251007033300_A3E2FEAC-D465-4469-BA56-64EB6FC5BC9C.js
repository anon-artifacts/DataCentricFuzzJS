var called = false;
var target = {};
const v4 = () => {
    called = true;
    return true;
};
var handler = { preventExtensions: v4 };
var holder = Proxy.revocable(target, handler);
holder.revoke();
const v12 = () => {
    const v13 = holder.proxy;
    let v15;
    try { v15 = Object.preventExtensions(v13); } catch (e) {}
    return v15;
};
v12();
