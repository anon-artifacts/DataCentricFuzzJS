function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this?.__defineGetter__;
}
function f7() {
    const v10 = {};
    const v13 = new Proxy(v10, { has: 0 });
    "foo" in v13;
    return 0;
}
try { f7(); } catch (e) {}
