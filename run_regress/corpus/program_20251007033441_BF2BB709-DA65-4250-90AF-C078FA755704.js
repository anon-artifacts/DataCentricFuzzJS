const v0 = () => {
    return undefined;
};
var handler = { ownKeys: v0 };
const v6 = new Proxy({}, handler);
for (const v11 of [v6,Proxy.revocable({}, handler).proxy]) {
    const v12 = () => {
        let v14;
        try { v14 = Object.keys(v11); } catch (e) {}
        return v14;
    };
    v12();
}
