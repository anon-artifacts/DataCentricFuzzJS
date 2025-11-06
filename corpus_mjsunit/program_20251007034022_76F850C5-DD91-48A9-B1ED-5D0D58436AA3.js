function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
("function").localeCompare();
const v6 = WeakMap.set;
try { v6(); } catch (e) {}
const v8 = () => {
    return "e";
};
const v9 = {};
const v12 = Proxy.revocable({}, v9);
v12.revoke();
for (const v16 of [v9,v12.proxy]) {
    try { Object.keys(v16); } catch (e) {}
    undefined ?? undefined;
}
