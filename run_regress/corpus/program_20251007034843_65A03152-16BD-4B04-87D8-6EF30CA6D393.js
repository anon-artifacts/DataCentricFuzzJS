try { BigUint64Array.from(Int8Array); } catch (e) {}
const v4 = {};
const v6 = Object.create(Object, { d: v4 });
const v9 = new Proxy(v6, {});
for (const v14 of [v9,Proxy.revocable(v6, {}).proxy]) {
    v14.d = v14;
}
