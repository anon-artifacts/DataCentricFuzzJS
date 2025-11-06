var called = false;
var target = {};
const v4 = () => {
    called = true;
    return true;
};
var handler = { set: v4 };
var holder = Proxy.revocable(target, handler);
holder.revoke();
const v12 = () => {
    const t10 = holder.proxy;
    t10.foo = "bar";
    return "bar";
};
try { v12(); } catch (e) {}
