function f0() {
}
const v1 = { ownKeys: f0 };
for (const v7 of [Proxy,Proxy.revocable({}, v1).proxy]) {
    try { Object.keys(v7); } catch (e) {}
}
