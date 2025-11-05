const v0 = () => {
    return ["foo","foo"];
};
var handler = { ownKeys: v0 };
const v8 = new Proxy({}, handler);
for (const v13 of [v8,Proxy.revocable({}, handler).proxy]) {
    const v14 = () => {
        let v16;
        try { v16 = Object.getOwnPropertyNames(v13); } catch (e) {}
        return v16;
    };
    v14();
}
