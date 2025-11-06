const v3 = { enumerable: true, configurable: true };
const v6 = { enumerable: false, configurable: true };
var proto = Object.create(null, { a: v3, b: v6 });
const v13 = { enumerable: true, configurable: true };
const v16 = { enumerable: false, configurable: true };
var target = Object.create(proto, { c: v13, d: v16 });
const v22 = new Proxy(target, {});
for (const v27 of [v22,Proxy.revocable(target, {}).proxy]) {
    var names = Object.keys(v27);
    names.length;
    names[0];
}
