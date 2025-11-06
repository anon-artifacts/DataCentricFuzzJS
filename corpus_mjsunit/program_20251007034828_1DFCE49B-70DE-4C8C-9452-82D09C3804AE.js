var called = false;
function f2() {
}
var target = f2;
const v4 = () => {
    called = true;
    return true;
};
var handler = { apply: v4 };
var holder = Proxy.revocable(target, handler);
holder.revoke();
const v12 = () => {
    let v13;
    try { v13 = holder.proxy(); } catch (e) {}
    return v13;
};
v12();
