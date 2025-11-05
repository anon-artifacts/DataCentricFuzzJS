var called = false;
var target = {};
const v4 = () => {
    called = true;
    return true;
};
var handler = { defineProperty: v4 };
var holder = Proxy.revocable(target, handler);
holder.revoke();
var p = holder.proxy;
const v14 = () => {
    const v16 = {};
    let v18;
    try { v18 = Object.defineProperty(p, "foo", v16); } catch (e) {}
    return v18;
};
v14();
