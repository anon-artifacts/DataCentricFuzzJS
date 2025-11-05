function f0() {
    const v3 = {};
    const v6 = new Proxy(v3, { has: 0 });
    "foo" in v6;
}
try { f0(); } catch (e) {}
